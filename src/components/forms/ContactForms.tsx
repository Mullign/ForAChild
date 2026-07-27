"use client";

import { Button } from "@/components/ui/Button";
import {
  FieldLabel,
  StatusMessage,
  TextArea,
  fieldClass,
  useFormSubmit,
} from "@/components/forms/form-shared";

export function ContactForm({ intent = "general" }: { intent?: string }) {
  const { status, pending, handleSubmit } = useFormSubmit();
  const defaultIntent =
    intent === "tour" ? "tour" : intent === "enrollment" ? "enrollment" : "general";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="contact-name" required>
            Full name
          </FieldLabel>
          <input
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </div>
        <div>
          <FieldLabel htmlFor="contact-email" required>
            Email
          </FieldLabel>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="contact-phone">Phone</FieldLabel>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
          />
        </div>
        <div>
          <FieldLabel htmlFor="contact-intent" required>
            I am interested in
          </FieldLabel>
          <select
            id="contact-intent"
            name="intent"
            required
            defaultValue={defaultIntent}
            className={fieldClass}
          >
            <option value="tour">Scheduling a tour</option>
            <option value="enrollment">Enrollment</option>
            <option value="general">General question</option>
          </select>
        </div>
      </div>
      <div>
        <FieldLabel htmlFor="contact-child-age">Child&apos;s age (optional)</FieldLabel>
        <input id="contact-child-age" name="childAge" className={fieldClass} />
      </div>
      <div>
        <FieldLabel htmlFor="contact-message" required>
          Message
        </FieldLabel>
        <TextArea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tell us how we can help"
        />
      </div>
      <StatusMessage status={status} />
      <Button type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}

export function TourRequestForm() {
  const { status, pending, handleSubmit } = useFormSubmit();

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="tour-name" required>
            Parent / guardian name
          </FieldLabel>
          <input id="tour-name" name="name" required autoComplete="name" className={fieldClass} />
        </div>
        <div>
          <FieldLabel htmlFor="tour-email" required>
            Email
          </FieldLabel>
          <input
            id="tour-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="tour-phone" required>
            Phone
          </FieldLabel>
          <input
            id="tour-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={fieldClass}
          />
        </div>
        <div>
          <FieldLabel htmlFor="tour-preferred-date">Preferred tour date</FieldLabel>
          <input id="tour-preferred-date" name="preferredDate" type="date" className={fieldClass} />
        </div>
      </div>
      <div>
        <FieldLabel htmlFor="tour-program">Program of interest</FieldLabel>
        <select id="tour-program" name="program" className={fieldClass} defaultValue="">
          <option value="" disabled>
            Select a program
          </option>
          <option value="infant">Infant Care</option>
          <option value="toddler">Toddler Care</option>
          <option value="preschool">Preschool</option>
          <option value="before-after">Before &amp; After School</option>
          <option value="summer">Summer Programs</option>
          <option value="unsure">Not sure yet</option>
        </select>
      </div>
      <div>
        <FieldLabel htmlFor="tour-notes">Notes</FieldLabel>
        <TextArea
          id="tour-notes"
          name="notes"
          placeholder="Tell us how we can help"
        />
      </div>
      <StatusMessage status={status} />
      <Button type="submit" disabled={pending}>
        {pending ? "Submitting…" : "Request a Tour"}
      </Button>
    </form>
  );
}

export function EnrollmentInquiryForm() {
  const { status, pending, handleSubmit } = useFormSubmit();

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="enroll-parent" required>
            Parent / guardian name
          </FieldLabel>
          <input
            id="enroll-parent"
            name="parentName"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </div>
        <div>
          <FieldLabel htmlFor="enroll-email" required>
            Email
          </FieldLabel>
          <input
            id="enroll-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="enroll-phone" required>
            Phone
          </FieldLabel>
          <input
            id="enroll-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={fieldClass}
          />
        </div>
        <div>
          <FieldLabel htmlFor="enroll-start">Desired start date</FieldLabel>
          <input id="enroll-start" name="startDate" type="date" className={fieldClass} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="enroll-child" required>
            Child&apos;s first name
          </FieldLabel>
          <input id="enroll-child" name="childName" required className={fieldClass} />
        </div>
        <div>
          <FieldLabel htmlFor="enroll-age" required>
            Child&apos;s age
          </FieldLabel>
          <input id="enroll-age" name="childAge" required className={fieldClass} />
        </div>
      </div>
      <div>
        <FieldLabel htmlFor="enroll-program" required>
          Program
        </FieldLabel>
        <select id="enroll-program" name="program" required className={fieldClass} defaultValue="">
          <option value="" disabled>
            Select a program
          </option>
          <option value="infant">Infant Care</option>
          <option value="toddler">Toddler Care</option>
          <option value="preschool">Preschool</option>
          <option value="before-after">Before &amp; After School</option>
          <option value="summer">Summer Programs</option>
        </select>
      </div>
      <div>
        <FieldLabel htmlFor="enroll-message">Additional details</FieldLabel>
        <TextArea id="enroll-message" name="message" />
      </div>
      <StatusMessage status={status} />
      <Button type="submit" disabled={pending}>
        {pending ? "Submitting…" : "Submit Enrollment Inquiry"}
      </Button>
    </form>
  );
}
