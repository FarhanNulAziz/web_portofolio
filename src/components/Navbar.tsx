"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { content } from "@/data/content";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-surface-variant bg-surface/90 backdrop-blur-md">
      <nav
        aria-label={content.labels.mainNavigation}
        className="mx-auto flex h-16 max-w-content items-center justify-between gap-space-md px-gutter-mobile md:px-margin"
      >
        <span className="min-w-0 truncate font-headline-sm text-on-surface">
          {content.profile.name}
        </span>

        <div className="hidden items-center gap-space-lg md:flex">
          {content.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-10 items-center rounded-control text-label-md text-on-surface-variant transition-colors duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={
            isOpen ? content.labels.closeMenu : content.labels.openMenu
          }
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-control text-on-surface transition-colors duration-200 hover:bg-surface-container-high focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
        >
          {isOpen ? (
            <X aria-hidden="true" className="h-6 w-6" />
          ) : (
            <Menu aria-hidden="true" className="h-6 w-6" />
          )}
        </button>
      </nav>

      {isOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-surface-variant bg-surface md:hidden"
        >
          <div className="mx-auto flex max-w-content flex-col px-gutter-mobile py-space-sm">
            {content.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex min-h-10 items-center rounded-control px-space-sm py-space-sm text-body-md text-on-surface-variant transition-colors duration-200 hover:bg-surface-container-low hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
