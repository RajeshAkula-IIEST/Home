"use client";

import PublicationItem from "./PublicationItem";

type Publication = {
  year: number;
  title: string;
  authors: string;

  journal?: string;
  conference?: string;
  patentOffice?: string;

  doi?: string;
  location?: string;
  patentNumber?: string;
};

type Props = {
  papers: Publication[];
};

export default function PublicationPanel({
  papers,
}: Props) {
  return (
    <div className="w-full">

      {papers.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white py-16 text-center text-slate-500 shadow-sm sm:py-24">
          No publications available.
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:rounded-3xl">
          <div className="divide-y divide-slate-100">
            {papers.map((paper, index) => (
              <PublicationItem
                key={index}
                {...paper}
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}