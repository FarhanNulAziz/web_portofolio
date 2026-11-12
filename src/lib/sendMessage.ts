export type ContactMessage = {
  name: string;
  email: string;
  message: string;
  _gotcha?: string;
};

type FormspreeErrorResponse = {
  error?: string;
  errors?: Array<{
    message?: string;
  }>;
};

function isAbortError(error: unknown) {
  return (
    (error instanceof DOMException && error.name === "AbortError") ||
    (error instanceof Error && error.name === "AbortError")
  );
}

export async function sendMessage(data: ContactMessage): Promise<void> {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID?.trim();

  if (!formId) {
    throw new Error(
      "NEXT_PUBLIC_FORMSPREE_ID belum diatur. Tambahkan ID Formspree ke .env.local.",
    );
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: data.message,
        ...(data._gotcha ? { _gotcha: data._gotcha } : {}),
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      let formspreeMessage: string | undefined;

      try {
        const payload = (await response.json()) as FormspreeErrorResponse;
        formspreeMessage =
          payload.errors
            ?.map((item) => item.message)
            .filter(Boolean)
            .join(", ") || payload.error;
      } catch {
        formspreeMessage = undefined;
      }

      throw new Error(
        formspreeMessage ??
          `Formspree menolak pengiriman (status ${response.status}).`,
      );
    }
  } catch (error) {
    if (isAbortError(error)) {
      throw new Error("Pengiriman melewati batas waktu 10 detik.");
    }

    if (error instanceof TypeError) {
      throw new Error(
        "Tidak dapat terhubung ke server. Periksa koneksi internet lalu coba lagi.",
      );
    }

    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}
