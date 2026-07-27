"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { mainNav, siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { cx } from "@/lib/utils";

function isPendingCopy(value?: string) {
  return !value || value.includes("[") || /pending/i.test(value);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [desktopProgramsOpen, setDesktopProgramsOpen] = useState(false);
  const menuId = useId();
  const programsPanelId = useId();
  const desktopProgramsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        setProgramsOpen(false);
        setDesktopProgramsOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (
        desktopProgramsRef.current &&
        !desktopProgramsRef.current.contains(event.target as Node)
      ) {
        setDesktopProgramsOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  function closeMenus() {
    setOpen(false);
    setProgramsOpen(false);
    setDesktopProgramsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-surface/95 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <SiteLogo priority />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            if (item.children) {
              const childActive = item.children.some((c) => pathname.startsWith(c.href));
              return (
                <div
                  key={item.href}
                  className="relative"
                  ref={desktopProgramsRef}
                  onMouseEnter={() => setDesktopProgramsOpen(true)}
                  onMouseLeave={() => setDesktopProgramsOpen(false)}
                >
                  <button
                    type="button"
                    className={cx(
                      "rounded-[var(--radius-sm)] px-3 py-2 text-sm font-medium transition-colors",
                      childActive || pathname === item.href || desktopProgramsOpen
                        ? "bg-brand-soft text-brand-dark"
                        : "text-foreground/80 hover:bg-surface-muted hover:text-foreground",
                    )}
                    aria-expanded={desktopProgramsOpen}
                    aria-haspopup="true"
                    aria-controls={programsPanelId}
                    onClick={() => setDesktopProgramsOpen((v) => !v)}
                  >
                    {item.label}
                  </button>
                  <div
                    id={programsPanelId}
                    hidden={!desktopProgramsOpen}
                    className="absolute left-0 top-full z-50 min-w-64 pt-2"
                  >
                    <ul className="rounded-[var(--radius-md)] border border-border bg-surface p-2 shadow-[var(--shadow-md)]">
                      <li>
                        <Link
                          href={item.href}
                          className={cx(
                            "block rounded-[var(--radius-sm)] px-3 py-2.5 hover:bg-brand-soft",
                            pathname === item.href && "bg-brand-soft",
                          )}
                          onClick={closeMenus}
                        >
                          <span className="block text-sm font-semibold text-foreground">
                            All Programs
                          </span>
                        </Link>
                      </li>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={cx(
                              "block rounded-[var(--radius-sm)] px-3 py-2.5 hover:bg-brand-soft",
                              pathname === child.href && "bg-brand-soft",
                            )}
                            onClick={closeMenus}
                          >
                            <span className="block text-sm font-semibold text-foreground">
                              {child.label}
                            </span>
                            {!isPendingCopy(child.description) ? (
                              <span className="mt-0.5 block text-xs text-muted">
                                {child.description}
                              </span>
                            ) : null}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }

            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cx(
                  "rounded-[var(--radius-sm)] px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-brand-soft text-brand-dark"
                    : "text-foreground/80 hover:bg-surface-muted hover:text-foreground",
                )}
                aria-current={active ? "page" : undefined}
                onClick={closeMenus}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.contact.phoneHref}
            className="text-sm font-semibold text-brand-dark hover:text-brand"
          >
            {siteConfig.contact.phone}
          </a>
          <Button href="/contact?intent=tour" size="sm">
            Schedule a Tour
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-[var(--radius-sm)] border border-border p-2 lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="flex h-5 w-5 flex-col justify-center gap-1.5">
            <span
              className={cx(
                "block h-0.5 w-5 bg-foreground transition",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span className={cx("block h-0.5 w-5 bg-foreground transition", open && "opacity-0")} />
            <span
              className={cx(
                "block h-0.5 w-5 bg-foreground transition",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>

      <div
        id={menuId}
        className={cx(
          "border-t border-border bg-surface lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="max-h-[calc(100dvh-4rem)] overflow-y-auto py-4">
          <nav aria-label="Mobile primary">
            <ul className="space-y-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  {item.children ? (
                    <div>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-[var(--radius-sm)] px-3 py-3 text-left text-base font-medium hover:bg-surface-muted"
                        aria-expanded={programsOpen}
                        aria-controls={`${menuId}-programs`}
                        onClick={() => setProgramsOpen((v) => !v)}
                      >
                        {item.label}
                        <span aria-hidden="true">{programsOpen ? "−" : "+"}</span>
                      </button>
                      {programsOpen ? (
                        <ul
                          id={`${menuId}-programs`}
                          className="mb-2 ml-3 space-y-1 border-l border-border pl-3"
                        >
                          <li>
                            <Link
                              href={item.href}
                              className="block rounded-[var(--radius-sm)] px-3 py-2 text-sm font-medium hover:bg-brand-soft"
                              onClick={closeMenus}
                            >
                              All Programs
                            </Link>
                          </li>
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block rounded-[var(--radius-sm)] px-3 py-2 text-sm hover:bg-brand-soft"
                                onClick={closeMenus}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block rounded-[var(--radius-sm)] px-3 py-3 text-base font-medium hover:bg-surface-muted"
                      aria-current={pathname === item.href ? "page" : undefined}
                      onClick={closeMenus}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-3 border-t border-border pt-4">
              <a
                href={siteConfig.contact.phoneHref}
                className="block text-center text-base font-semibold text-brand-dark"
              >
                {siteConfig.contact.phone}
              </a>
              <Button href="/contact?intent=tour" className="w-full" onClick={closeMenus}>
                Schedule a Tour
              </Button>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
