import { ExternalLink } from "lucide-react";

type Props = {
  title: string;
  journal: string;
  authors: string;
  doi: string;
  year?: number;
};

export default function PublicationItem({
  title,
  journal,
  authors,
  doi,
  year,
}: Props) {
  return (
    <article className="border-l-4 border-blue-600 p-6 transition hover:bg-slate-50">

      <div className="flex items-center justify-between">

        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
          {journal}
        </span>

        {year && (
          <span className="text-sm font-medium text-slate-500">
            {year}
          </span>
        )}

      </div>

      <h3 className="mt-4 text-xl font-semibold leading-8 text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-base text-slate-600">
        {authors}
      </p>

      <div className="mt-5 flex gap-6">

        <a
          href={doi}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-800"
        >
          DOI
          <ExternalLink size={16} />
        </a>

      </div>

    </article>
  );
}