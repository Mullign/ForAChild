"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { mainNav, siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { cx } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function closeMenus() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-surface/95 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <SiteLogo priority />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
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
          <Button href="/contact" size="sm">
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
        className={cx("border-t border-border bg-surface lg:hidden", open ? "block" : "hidden")}
      >
        <Container className="max-h-[calc(100dvh-4rem)] overflow-y-auto py-4">
          <nav aria-label="Mobile primary">
            <ul className="space-y-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-[var(--radius-sm)] px-3 py-3 text-base font-medium hover:bg-surface-muted"
                    aria-current={pathname === item.href ? "page" : undefined}
                    onClick={closeMenus}
                  >
                    {item.label}
                  </Link>
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
              <Button href="/contact" className="w-full" onClick={closeMenus}>
                Schedule a Tour
              </Button>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
