export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/** True when copy is still a bracketed / pending placeholder. */
export function isPendingCopy(value?: string | null) {
  if (!value) return true;
  return /\[[^\]]*\]/i.test(value) || /\bpending\b/i.test(value);
}

/** Presentable label for incomplete content. */
export function displayCopy(value: string, fallback = "Coming soon") {
  return isPendingCopy(value) ? fallback : value;
}
