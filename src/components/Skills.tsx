import type { LucideIcon } from "lucide-react";
import { Brain, Terminal, Wrench } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import type { SkillIcon } from "@/data/content";
import { content } from "@/data/content";

const skillIcons: Record<SkillIcon, LucideIcon> = {
  terminal: Terminal,
  wrench: Wrench,
  brain: Brain,
};

export function Skills() {
  const { skillsSection, skills } = content;

  return (
    <section
      id="keahlian"
      className="px-gutter-mobile py-16 md:px-margin md:py-20"
    >
      <div className="mx-auto max-w-content">
        <SectionTitle
          number={skillsSection.number}
          title={skillsSection.heading}
          description={skillsSection.description}
        />

        <div className="mt-space-xl grid grid-cols-1 gap-gutter md:grid-cols-3">
          {skills.map((group) => {
            const Icon = skillIcons[group.icon];

            return (
              <div
                key={group.title}
                className="h-full rounded-card bg-surface-container-lowest p-space-lg shadow-sm"
              >
                <div className="flex items-center gap-space-md">
                  <Icon aria-hidden="true" className="h-6 w-6 text-primary" />
                  <h3 className="font-headline-sm text-on-surface">
                    {group.title}
                  </h3>
                </div>

                <ul className="mt-space-lg flex flex-wrap gap-space-sm">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-control bg-surface-container px-3 py-1.5 text-label-md text-on-surface transition-colors duration-200 hover:bg-secondary-container"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
