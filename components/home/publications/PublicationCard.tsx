import { ArrowUpRight, Calendar } from "lucide-react";

type Props = {
  title: string;
  journal: string;
  year: number;
  highlight: string;
  theme: string;
  doi: string;
};

export default function PublicationCard({
  title,
  journal,
  year,
  highlight,
  theme,
  doi,
}: Props) {
  return (
    <article
      className="
        group rounded-3xl border border-slate-200
        bg-white p-8 shadow-sm
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
          {journal}
        </span>

        <span className="flex items-center gap-1 text-sm text-slate-500">
          <Calendar size={15} />
          {year}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-bold leading-8 text-slate-900 group-hover:text-blue-700 transition-colors">
        {title}
      </h3>

      <p className="mt-4 text-slate-600 leading-7">
        {highlight}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
          {theme}
        </span>

        <a
          href={doi}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-800"
        >
          Read Paper
          <ArrowUpRight size={17} />
        </a>
      </div>
    </article>
  );
}