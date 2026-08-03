import { journalPublications } from "@/data/journalPublications";
import PublicationYear from "./PublicationYear";

export default function PublicationList() {
  const years = Array.from(
  new Set(journalPublications.map((p) => p.year))
).sort((a, b) => b - a);

  return (
    <>
      {years.map((year) => (
        <PublicationYear
          key={year}
          year={year}
          papers={journalPublications.filter((p) => p.year === year)}
        />
      ))}
    </>
  );
}