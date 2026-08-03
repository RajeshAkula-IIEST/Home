import Section from "@/components/ui/Section";

import ResearchVision from "./ResearchVision";
import ResearchCapabilities from "./ResearchCapabilities";
import ResearchAreas from "./ResearchAreas";


export default function Research() {
  return (
    <Section
      id="research"
      className="bg-gradient-to-br from-slate-50 via-white to-sky-50"
    >
      <div className="space-y-6">

        <ResearchVision />

        <ResearchAreas />

        <ResearchCapabilities />

      </div>
    </Section>
  );
}