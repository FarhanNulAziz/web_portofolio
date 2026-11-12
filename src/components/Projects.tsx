import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { content } from "@/data/content";

export function Projects() {
  const { projectsSection, projects } = content;

  return (
    <section
      id="proyek"
      className="px-gutter-mobile py-16 md:px-margin md:py-20"
    >
      <div className="mx-auto max-w-content">
        <SectionTitle
          number={projectsSection.number}
          title={projectsSection.heading}
          description={projectsSection.description}
        />

        <div className="mt-space-xl grid grid-cols-1 gap-gutter md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
