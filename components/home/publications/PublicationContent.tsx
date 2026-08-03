import FeaturedPublication from "./FeaturedPublication";
import PublicationCard from "./PublicationCard";
import { featuredPublications } from "@/data/publications";
import Link from "next/link";

type PublicationContentProps = {
  showButton?: boolean;
};

export default function PublicationContent({
  showButton = false,
}: PublicationContentProps) {
  return (
    <>
      <FeaturedPublication />

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {featuredPublications
          .filter((paper) => !paper.featured)
          .map((paper) => (
            <PublicationCard
              key={paper.title}
              {...paper}
            />
          ))}
      </div>

      {showButton && (
        <div className="mt-16 flex justify-center">
            <Link
  href="/publications"
  className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
>
  View Complete Publication List
</Link>        
        </div>
      )}
    </>
  );
}