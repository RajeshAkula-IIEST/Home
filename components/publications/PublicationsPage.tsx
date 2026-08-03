"use client";

import { useMemo, useState } from "react";

import Section from "@/components/ui/Section";

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

  // Returns the data corresponding to the selected category
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

  // Available years for the selected category (latest first)
  const years = Array.from(
    new Set<number>(data.map((p) => p.year))
  ).sort((a, b) => b - a);

  // Publications for the selected year
  const papers = data.filter((p) => p.year === year);

  // Automatically select the latest year whenever the category changes
  const changeCategory = (newCategory: string) => {
    let source;

    switch (newCategory) {
      case "Conference":
        source = conferencePublications;
        break;

      case "Patent":
        source = patents;
        break;

      default:
        source = journalPublications;
    }

    const latestYear = Math.max(...source.map((p) => p.year));

    setCategory(newCategory);
    setYear(latestYear);
  };

  return (
    <Section id="publications">

      <div className="mt-5">
        <PublicationStats
        value={category}
        onChange={changeCategory}
/>
      </div>

      {years.length > 1 && (
        <div className="mt-6">
          <YearButtons
            years={years}
            value={year}
            onChange={setYear}
          />
        </div>
      )}

      <div className="mt-8">
        <PublicationPanel papers={papers} />
      </div>

    </Section>
  );
}