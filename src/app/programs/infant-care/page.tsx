import type { Metadata } from "next";
import { ProgramPageTemplate } from "@/components/shared/ProgramPageTemplate";
import { programSummaries } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

const program = programSummaries[0];

export const metadata: Metadata = buildMetadata({
  title: program.title,
  description: program.description,
  path: program.href,
});

export default function InfantCarePage() {
  return <ProgramPageTemplate {...program} />;
}
