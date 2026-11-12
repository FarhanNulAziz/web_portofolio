"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Send } from "lucide-react";
import { content } from "@/data/content";
import { sendMessage } from "@/lib/sendMessage";

type FormStatus = "idle" | "sending" | "success" | "error";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

type FieldName = keyof FormErrors;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const baseInputClasses =
  "w-full rounded-control border bg-surface px-space-md py-2.5 text-body-md text-on-surface transition-colors duration-200 placeholder:text-outline focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/20";

const normalInputClasses =
  "border-outline-variant hover:border-outline focus:border-primary";

const errorInputClasses =
  "border-error hover:border-error focus:border-error";

function getInputClasses(hasError: boolean) {
  return `${baseInputClasses} ${hasError ? errorInputClasses : normalInputClasses}`;
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const labels = content.contact.form;
  const isSending = status === "sending";

  function validate(values: {
    name: string;
    email: string;
    message: string;
  }): FormErrors {
    const nextErrors: FormErrors = {};

    if (values.name.length < 2) {
      nextErrors.name = labels.validation.name;
    }

    if (!emailPattern.test(values.email)) {
      nextErrors.email = labels.validation.email;
    }

    if (values.message.length < 10) {
      nextErrors.message = labels.validation.message;
    }

    return nextErrors;
  }

  function clearFieldError(field: FieldName) {
    setErrors((current) => ({ ...current, [field]: undefined }));

    if (status === "success" || status === "error") {
      setStatus("idle");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSending) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const gotcha = String(formData.get("_gotcha") ?? "").trim();

    if (gotcha) {
      form.reset();
      setErrors({});
      setStatus("success");
      return;
    }

    const values = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };
    const nextErrors = validate(values);

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("sending");

    try {
      await sendMessage({ ...values, _gotcha: gotcha });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const statusMessage =
    status === "sending"
      ? labels.status.sending
      : status === "success"
        ? labels.status.success
        : status === "error"
          ? labels.status.error
          : null;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-busy={isSending}
      className="flex flex-col gap-5"
    >
      <div>
        <label
          htmlFor="contact-name"
          className="mb-space-sm block text-label-md text-on-surface"
        >
          {labels.fields.name}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          disabled={isSending}
          autoComplete="name"
          placeholder={labels.placeholder.name}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          onChange={() => clearFieldError("name")}
          className={getInputClasses(Boolean(errors.name))}
        />
        {errors.name ? (
          <p
            id="contact-name-error"
            className="mt-space-xs text-body-sm text-error"
          >
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="mb-space-sm block text-label-md text-on-surface"
        >
          {labels.fields.email}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          disabled={isSending}
          autoComplete="email"
          placeholder={labels.placeholder.email}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          onChange={() => clearFieldError("email")}
          className={getInputClasses(Boolean(errors.email))}
        />
        {errors.email ? (
          <p
            id="contact-email-error"
            className="mt-space-xs text-body-sm text-error"
          >
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-space-sm block text-label-md text-on-surface"
        >
          {labels.fields.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          disabled={isSending}
          placeholder={labels.placeholder.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          onChange={() => clearFieldError("message")}
          className={`${getInputClasses(Boolean(errors.message))} min-h-32 resize-y`}
        />
        {errors.message ? (
          <p
            id="contact-message-error"
            className="mt-space-xs text-body-sm text-error"
          >
            {errors.message}
          </p>
        ) : null}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-9999px] h-px w-px overflow-hidden opacity-0"
      >
        <input
          id="contact-gotcha"
          name="_gotcha"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          disabled={isSending}
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isSending}
          className="inline-flex min-h-10 w-full items-center justify-center gap-space-sm rounded-control bg-primary-container px-5 py-2.5 text-label-md text-on-primary transition-colors duration-200 hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSending ? labels.status.sending : labels.submitLabel}
          <Send aria-hidden="true" className="h-[18px] w-[18px]" />
        </button>

        {statusMessage ? (
          <p
            role="status"
            aria-live="polite"
            className={`mt-space-sm text-body-sm ${
              status === "error"
                ? "text-error"
                : status === "success"
                  ? "text-emerald-800"
                  : "text-secondary"
            }`}
          >
            {statusMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
