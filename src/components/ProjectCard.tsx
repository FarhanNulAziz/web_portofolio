import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { ArrowRight, ExternalLink, ImageIcon } from "lucide-react";
import type { Project } from "@/data/content";
import { content } from "@/data/content";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const hasImage = existsSync(
    join(process.cwd(), "public", project.image.replace(/^\/+/, "")),
  );
  const imageAlt = `${content.labels.projectImageAlt} ${project.title}`;
  const githubAria = `${content.labels.viewCode} ${project.title} ${content.labels.onGithub}`;
  const demoAria = `${content.labels.viewDemo} ${project.title}`;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-card bg-surface-container-lowest shadow-sm transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="relative h-44 shrink-0 overflow-hidden bg-surface-container">
        {hasImage ? (
          <Image
            src={project.image}
            alt={imageAlt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={imageAlt}
            className="flex h-full w-full items-center justify-center text-primary"
          >
            <ImageIcon aria-hidden="true" className="h-10 w-10" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-space-lg">
        <h3 className="break-words font-headline-sm text-on-surface">{project.title}</h3>
        <p className="mt-space-sm line-clamp-3 text-body-sm text-on-surface-variant">
          {project.description}
        </p>

        <ul className="mt-space-md flex flex-wrap gap-space-sm">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-tag bg-surface-container px-space-sm py-space-xs text-label-sm text-on-surface-variant"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-space-md pt-space-lg">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={githubAria}
            className="inline-flex min-h-10 items-center gap-space-xs rounded-control text-label-md text-secondary transition-colors duration-200 hover:text-on-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {content.labels.github}
            <ExternalLink aria-hidden="true" className="h-4 w-4" />
          </a>

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={demoAria}
              className="inline-flex min-h-10 items-center gap-space-xs rounded-control text-label-md text-primary transition-colors duration-200 hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {content.labels.demo}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
