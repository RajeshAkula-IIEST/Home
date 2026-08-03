import Section from "@/components/ui/Section";

import AboutContent from "./AboutContent";
import CareerTimeline from "./CareerTimeline";

export default function About() {
  return (
    <Section
      id="about"
      className="bg-gradient-to-br from-slate-50 via-white to-sky-50"
    >
      <div className="grid gap-16 lg:grid-cols-[0.5fr_0.5fr]">

        <AboutContent />

        <CareerTimeline />

      </div>
    </Section>
  );
}