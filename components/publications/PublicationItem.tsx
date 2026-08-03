import { ExternalLink } from "lucide-react";

type Props = {
  title: string;
  authors: string;
  year: number;

  journal?: string;
  conference?: string;
  patentOffice?: string;

  doi?: string;
  location?: string;
  patentNumber?: string;
};

export default function PublicationItem({
  title,
  authors,
  year,
  journal,
  conference,
  patentOffice,
  doi,
  location,
  patentNumber,
}: Props) {
  const venue = journal || conference || patentOffice;

  return (
    <article className="border-l-4 border-blue-600 p-6 transition hover:bg-slate-50">

      <div className="flex items-center justify-between">

        {venue && (
          <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
            {venue}
          </span>
        )}

        <span className="text-sm font-medium text-slate-500">
          {year}
        </span>

      </div>

      <h3 className="mt-4 text-xl font-semibold leading-8 text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-base text-slate-600">
        {authors}
      </p>

      {/* Conference location */}
      {location && (
        <p className="mt-2 text-sm text-slate-500">
          📍 {location}
        </p>
      )}

      {/* Patent number */}
      {patentNumber && (
        <p className="mt-2 text-sm text-slate-500">
          Patent No.: {patentNumber}
        </p>
      )}

      {/* DOI only for journals/conferences */}
      {doi && (
        <div className="mt-5">
          <a
            href={doi}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-800"
          >
            View Publication
            <ExternalLink size={16} />
          </a>
        </div>
      )}

    </article>
  );
}