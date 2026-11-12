type SectionTitleProps = {
  number: string;
  title: string;
  description?: string;
};

export function SectionTitle({
  number,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div>
      <div className="flex items-baseline gap-space-md">
        <span className="font-code-inline font-bold text-primary">{number}</span>
        <h2 className="min-w-0 break-words font-headline-lg-mobile text-on-surface md:font-headline-lg">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="mt-space-sm max-w-2xl text-body-md text-on-surface-variant">
          {description}
        </p>
      ) : null}
    </div>
  );
}
