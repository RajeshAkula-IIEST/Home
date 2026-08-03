"use client";

import PublicationItem from "./PublicationItem";

type Publication = {
  title: string;
  journal: string;
  authors: string;
  doi: string;
  year: number;
};

type Props = {
  papers: Publication[];
};

export default function PublicationPanel({ papers }: Props) {
  return (
    <div className="mt-8 rounded-3xl border border-slate-200 bg-white shadow-sm">

      <div className="max-h-[460px] overflow-y-auto">

        {papers.length === 0 ? (
          <div className="py-24 text-center text-slate-500">
            No publications available.
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {papers.map((paper, index) => (
              <PublicationItem
                key={index}
                {...paper}
              />
            ))}
          </div>
        )}

      </div>

    </div>
  );
}