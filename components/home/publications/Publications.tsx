import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import PublicationContent from "./PublicationContent";

export default function Publications() {
  return (
    <Section id="publications">
      <SectionTitle
        eyebrow="Research Output"
        title="Featured Publications"
        subtitle="Selected publications highlighting my contributions to battery thermal management, heat transfer, artificial intelligence, and energy storage systems."
      />

      <PublicationContent showButton />
    </Section>
  );
}