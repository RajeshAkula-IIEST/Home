"use client";

import { useMemo, useState } from "react";

import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import PublicationStats from "./PublicationStats";
import PublicationTabs from "./PublicationTabs";
import YearButtons from "./YearButtons";
import PublicationPanel from "./PublicationPanel";

import { journalPublications } from "@/data/journalPublications";
import { conferencePublications } from "@/data/conferencePublications";
import { patents } from "@/data/patents";

export default function PublicationsPage() {
  const [category, setCategory] = useState("Journal");

  const [year, setYear] = useState(2025);

  const data = useMemo(() => {
    switch (category) {
      case "Conference":
        return conferencePublications;

      case "Patent":
        return patents;

      default:
        return journalPublications;
    }
  }, [category]);

  const years = [...new Set(data.map((p) => p.year))].sort(
    (a, b) => b - a
  );

  const papers = data.filter((p) => p.year === year);

  return (
    <Section id="publications">

      <SectionTitle
        eyebrow="Research"
        title="Publications"
        subtitle="Journal papers, conference publications and intellectual property."
      />

      <div className="mt-10">
        <PublicationStats />
      </div>

      <div className="mt-12">
        <PublicationTabs
          value={category}
          onChange={(value) => {
            setCategory(value);
            setYear(years[0]);
          }}
        />
      </div>

      <div className="mt-8">
        <YearButtons
          years={years}
          value={year}
          onChange={setYear}
        />
      </div>

      <PublicationPanel papers={papers} />

    </Section>
  );
}