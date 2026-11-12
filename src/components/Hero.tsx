import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { ArrowRight, UserRound } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { content } from "@/data/content";
import { getInitials } from "@/lib/getInitials";

export function Hero() {
  const hasProfileImage = existsSync(
    join(process.cwd(), "public", "images", "profile.jpeg"),
  );
  const initials = getInitials(content.profile.name);
  const photoAlt = `${content.labels.profilePhotoAlt} ${content.profile.name}`;

  return (
    <section className="px-gutter-mobile py-16 md:px-margin md:py-20">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-space-xl md:grid-cols-12 md:items-center md:gap-gutter">
        <div className="order-2 md:order-1 md:col-span-7">
          <div className="inline-flex items-center gap-space-sm rounded-full bg-secondary-container/50 px-space-md py-space-xs text-label-sm text-primary">
            <span
              aria-hidden="true"
              className="h-2 w-2 animate-pulse rounded-full bg-primary"
            />
            {content.hero.badge}
          </div>

          <h1 className="mt-space-lg break-words font-headline-xl-mobile text-on-surface md:font-headline-xl">
            {content.hero.greeting}{" "}
            <span className="text-primary">{content.profile.name}</span>
          </h1>

          <p className="mt-space-md max-w-xl text-body-lg text-on-surface-variant">
            {content.profile.tagline}
          </p>

          <div className="mt-space-xl flex flex-wrap items-center gap-space-md">
            <a
              href="#proyek"
              className="inline-flex min-h-10 items-center gap-space-sm rounded-control bg-primary-container px-5 py-2.5 text-label-md text-on-primary transition-colors duration-200 hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {content.hero.ctaLabel}
              <ArrowRight aria-hidden="true" className="h-[18px] w-[18px]" />
            </a>

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
            </div>
          </div>
        </div>

        <div className="order-1 w-full max-w-sm justify-self-center md:order-2 md:col-span-5 md:justify-self-end">
          <div className="rounded-photo bg-surface-container-lowest p-space-sm shadow-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-surface-container">
              {hasProfileImage ? (
                <Image
                  src="/images/profile.jpeg"
                  alt={photoAlt}
                  width={800}
                  height={1000}
                  sizes="(min-width: 768px) 440px, 90vw"
                  quality={90}
                  priority
                  className="h-full w-full object-cover object-[50%_20%]"
                />
              ) : (
                <div
                  role="img"
                  aria-label={photoAlt}
                  className="flex h-full w-full items-center justify-center text-primary"
                >
                  {initials ? (
                    <span className="font-headline-lg">{initials}</span>
                  ) : (
                    <UserRound aria-hidden="true" className="h-12 w-12" />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
