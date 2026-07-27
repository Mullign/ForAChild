"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site";
import { cx } from "@/lib/utils";

export const fieldClass =
  "mt-1.5 w-full rounded-[var(--radius-md)] border border-border bg-surface px-3.5 py-2.5 text-foreground shadow-sm placeholder:text-muted/70 focus:border-brand-dark";

export type FormStatus = "idle" | "success" | "error";

/**
 * Forms are UI-ready. Wire to an email/API service when provided.
 * Until then, guide families to call rather than implying delivery.
 */
export function useFormSubmit() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setPending(true);
    setStatus("idle");
    await new Promise((r) => setTimeout(r, 400));
    setStatus("success");
    setPending(false);
    form.reset();
  }

  return { status, pending, handleSubmit, setStatus };
}

export function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-foreground">
      {children}
      {required ? (
        <>
          <span className="text-danger" aria-hidden="true">
            {" "}
            *
          </span>
          <span className="sr-only"> (required)</span>
        </>
      ) : null}
    </label>
  );
}

export function StatusMessage({ status }: { status: FormStatus }) {
  if (status === "success") {
    return (
      <p className="text-sm font-medium text-success" role="status">
        Thank you. Please also call {siteConfig.contact.phone} and ask for{" "}
        {siteConfig.contact.askFor} so we can follow up promptly.
      </p>
    );
  }
  if (status === "error") {
    return (
      <p className="text-sm font-medium text-danger" role="alert">
        Something went wrong. Please call {siteConfig.contact.phone} and ask for{" "}
        {siteConfig.contact.askFor}.
      </p>
    );
  }
  return null;
}

export function TextArea({
  id,
  name,
  rows = 4,
  required,
  placeholder,
}: {
  id: string;
  name: string;
  rows?: number;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <textarea
      id={id}
      name={name}
      rows={rows}
      required={required}
      aria-required={required || undefined}
      placeholder={placeholder}
      className={cx(fieldClass, "resize-y")}
    />
  );
}
