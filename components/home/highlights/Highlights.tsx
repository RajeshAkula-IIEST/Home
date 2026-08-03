"use client";

import { useState } from "react";

import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import HighlightsTabs from "./HighlightsTabs";
import PublicationPanel from "./PublicationPanel";
import PatentPanel from "./PatentPanel";
import ConferencePanel from "./ConferencePanel";

export default function Highlights() {
  const [active, setActive] = useState("Publications");

  return (
    <Section id="highlights">
      <SectionTitle
        eyebrow="Research Highlights"
        title="Research Highlights"
        subtitle="A snapshot of my most significant research contributions, intellectual property, and scientific presentations."
      />

      <HighlightsTabs
        active={active}
        setActive={setActive}
      />

      <div className="mt-14">
        {active === "Publications" && <PublicationPanel />}
        {active === "Patent" && <PatentPanel />}
        {active === "Conferences" && <ConferencePanel />}
      </div>
    </Section>
  );
}