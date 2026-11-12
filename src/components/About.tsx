import { SectionTitle } from "@/components/SectionTitle";
import { content } from "@/data/content";

type InfoRowProps = {
  label: string;
  value: string;
};

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex items-start justify-between gap-space-md">
      <dt className="text-label-sm text-secondary">{label}</dt>
      <dd className="text-right text-body-sm text-on-surface">{value}</dd>
    </div>
  );
}

export function About() {
  const { about, academic } = content;

  return (
    <section
      id="tentang"
      className="px-gutter-mobile py-16 md:px-margin md:py-20"
    >
      <div className="mx-auto max-w-content">
        <SectionTitle
          number={about.number}
          title={about.heading}
          description={about.description}
        />

        <div className="mt-space-xl grid grid-cols-1 gap-space-lg md:grid-cols-12 md:gap-gutter">
          <div className="md:col-span-7">
            <div className="h-full rounded-card bg-surface-container-lowest p-gutter shadow-sm md:p-space-lg">
              <div className="space-y-space-md">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-body-md text-on-surface">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="h-full rounded-card bg-surface-container-lowest p-gutter shadow-sm md:p-space-lg">
              <h3 className="font-headline-sm text-on-surface">
                {about.academicTitle}
              </h3>

              <dl className="mt-space-lg space-y-space-md">
                <InfoRow
                  label={about.academicLabels.campus}
                  value={academic.campus}
                />
                <InfoRow
                  label={about.academicLabels.major}
                  value={academic.major}
                />
                <InfoRow
                  label={about.academicLabels.semester}
                  value={academic.semester}
                />
                <InfoRow
                  label={about.academicLabels.location}
                  value={academic.location}
                />

                <div className="flex items-start justify-between gap-space-md">
                  <dt className="text-label-sm text-secondary">
                    {about.academicLabels.status}
                  </dt>
                  <dd>
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-space-sm py-space-xs text-label-sm text-emerald-800">
                      {academic.status}
                    </span>
                  </dd>
                </div>

                {academic.ipk ? (
                  <InfoRow
                    label={about.academicLabels.ipk}
                    value={academic.ipk}
                  />
                ) : null}
                {academic.sks ? (
                  <InfoRow
                    label={about.academicLabels.sks}
                    value={academic.sks}
                  />
                ) : null}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
