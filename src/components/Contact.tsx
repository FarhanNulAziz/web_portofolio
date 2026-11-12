import { CalendarCheck, Mail } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SectionTitle } from "@/components/SectionTitle";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { content } from "@/data/content";

const iconClassName = "h-5 w-5";

export function Contact() {
  const contact = content.contact;

  const contactLinks = [
    {
      label: content.labels.email,
      value: content.socials.email,
      href: `mailto:${content.socials.email}`,
      external: false,
      icon: <Mail aria-hidden="true" className={iconClassName} />,
    },
    {
      label: content.labels.linkedin,
      value: content.socials.linkedin,
      href: content.socials.linkedin,
      external: true,
      icon: <LinkedinIcon className={iconClassName} />,
    },
    {
      label: content.labels.github,
      value: content.socials.github,
      href: content.socials.github,
      external: true,
      icon: <GithubIcon className={iconClassName} />,
    },
  ];

  return (
    <section
      id="kontak"
      className="px-gutter-mobile py-16 md:px-margin md:py-20"
    >
      <div className="mx-auto max-w-content">
        <SectionTitle
          number={contact.number}
          title={contact.heading}
          description={contact.description}
        />

        <div className="mt-space-xl grid grid-cols-1 gap-space-xl md:grid-cols-2">
          <div className="flex flex-col gap-space-lg">
          <div className="self-start rounded-card bg-surface-container-lowest p-space-lg shadow-sm">
              <div className="space-y-space-lg">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    className="group flex items-center gap-space-md rounded-control focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-control bg-secondary-container text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-on-primary">
                      {link.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-label-sm text-secondary">
                        {link.label}
                      </span>
                      <span className="mt-space-xs block break-all text-body-sm text-on-surface">
                        {link.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-card bg-primary/5 p-space-lg">
              <div className="flex items-start gap-space-md">
                <CalendarCheck
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 text-primary"
                />
                <div>
                  <h3 className="font-headline-sm text-on-surface">
                    {contact.availabilityTitle}
                  </h3>
                  <p className="mt-space-sm text-body-sm text-on-surface-variant">
                    {contact.availabilityDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-card bg-surface-container-lowest p-space-lg shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
