import { Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { content } from "@/data/content";

async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const currentYear = await getCurrentYear();

  return (
    <footer className="border-t border-surface-variant bg-surface">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-space-md px-gutter-mobile py-space-lg text-center md:flex-row md:px-margin md:text-left">
        <p className="text-body-sm text-on-surface-variant">
          {content.labels.copyrightSymbol} {currentYear}{" "}
          {content.profile.name}
        </p>

        <div className="flex items-center gap-space-sm">
          <a
            href={content.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${content.labels.github} ${content.profile.name}`}
            className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-control bg-surface-container-lowest p-2 text-on-surface-variant shadow-sm transition-colors duration-200 hover:bg-surface-container-high hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={content.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`${content.labels.linkedin} ${content.profile.name}`}
            className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-control bg-surface-container-lowest p-2 text-on-surface-variant shadow-sm transition-colors duration-200 hover:bg-surface-container-high hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${content.socials.email}`}
            aria-label={`${content.labels.email} ${content.profile.name}`}
            className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-control bg-surface-container-lowest p-2 text-on-surface-variant shadow-sm transition-colors duration-200 hover:bg-surface-container-high hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Mail aria-hidden="true" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
