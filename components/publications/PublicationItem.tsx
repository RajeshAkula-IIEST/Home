import { ExternalLink } from "lucide-react";

type Props = {
  title: string;
  authors: string;
  year?: number;

  journal?: string;
  conference?: string;
  patentOffice?: string;

  doi?: string;
  url?: string;
  location?: string;
  patentNumber?: string;
};

export default function PublicationItem({
  title,
  journal,
  conference,
  patentOffice,
  authors,
  doi,
  url,
  location,
  year,
  patentNumber,
}: Props) {
  const venue = journal || conference || patentOffice;
  const publicationLink = doi || url;

  return (
    <article className="border-l-4 border-blue-600 p-5 transition hover:bg-slate-50 sm:p-6">

      {/* ===================================================== */}
      {/* VENUE + YEAR */}
      {/* ===================================================== */}

      <div className="flex items-start justify-between gap-3">

        {venue && (
          <span className="max-w-[75%] rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold leading-5 text-blue-700 sm:max-w-none sm:text-sm">
            {venue}
          </span>
        )}

        {year && (
          <span className="shrink-0 text-sm font-medium text-slate-500">
            {year}
          </span>
        )}

      </div>

      {/* ===================================================== */}
      {/* TITLE */}
      {/* ===================================================== */}

      <h3 className="mt-3 text-lg font-semibold leading-7 text-slate-900 sm:mt-4 sm:text-xl sm:leading-8">
        {title}
      </h3>

      {/* ===================================================== */}
      {/* AUTHORS */}
      {/* ===================================================== */}

      <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-3 sm:text-base">
        {authors}
      </p>

      {/* ===================================================== */}
      {/* CONFERENCE LOCATION */}
      {/* ===================================================== */}

      {location && (
        <p className="mt-2 text-sm leading-6 text-slate-500">
          📍 {location}
        </p>
      )}

      {/* ===================================================== */}
      {/* PATENT NUMBER */}
      {/* ===================================================== */}

      {patentNumber && (
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Patent No.: {patentNumber}
        </p>
      )}

      {/* ===================================================== */}
      {/* PUBLICATION LINK */}
      {/* ===================================================== */}

      {publicationLink && (
        <div className="mt-4 sm:mt-5">

          <a
            href={publicationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-100 hover:text-blue-800"
          >
            View Publication
            <ExternalLink size={15} />
          </a>

        </div>
      )}

    </article>
  );
}