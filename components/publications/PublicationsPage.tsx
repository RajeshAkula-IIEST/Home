"use client";

import { useMemo, useState } from "react";

import Section from "@/components/ui/Section";

import PublicationStats from "./PublicationStats";
import YearButtons from "./YearButtons";
import PublicationPanel from "./PublicationPanel";

import { journalPublications } from "@/data/journalPublications";
import { conferencePublications } from "@/data/conferencePublications";
import { patents } from "@/data/patents";

type Publication = {
  year: number;
  title: string;
  authors: string;

  journal?: string;
  conference?: string;
  patentOffice?: string;

  doi?: string;
  url?: string;
  location?: string;
};

export default function PublicationsPage() {
  const [category, setCategory] = useState("Journal");
  const [year, setYear] = useState(2025);

  // Data corresponding to selected category
  const data: Publication[] = useMemo(() => {
    switch (category) {
      case "Conference":
        return conferencePublications as Publication[];

      case "Patent":
        return patents as Publication[];

      default:
        return journalPublications as Publication[];
    }
  }, [category]);

  // Available years (latest first)
  const years = Array.from(
    new Set(data.map((p) => p.year))
  ).sort((a, b) => b - a);

  // Publications of selected year
  const papers: Publication[] = data.filter(
    (p) => p.year === year
  );

  const changeCategory = (newCategory: string) => {
    let source: Publication[];

    switch (newCategory) {
      case "Conference":
        source = conferencePublications as Publication[];
        break;

      case "Patent":
        source = patents as Publication[];
        break;

      default:
        source = journalPublications as Publication[];
    }

    const latestYear = Math.max(
      ...source.map((p) => p.year)
    );

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