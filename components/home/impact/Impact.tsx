import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import impact from "@/data/impact";

import ImpactCard from "./ImpactCard";

export default function Impact() {
  return (
    <Section id="impact">
      <SectionTitle
        eyebrow="Research Impact"
        title="Research Impact"
        subtitle="Quantifying research contributions through publications, innovation, mentorship, and academic collaborations."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {impact.map((item) => (
          <ImpactCard
            key={item.label}
            icon={item.icon}
            value={item.value}
            label={item.label}
          />
        ))}
      </div>
    </Section>
  );
}