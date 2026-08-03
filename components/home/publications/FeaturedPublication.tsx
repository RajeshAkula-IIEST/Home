import { ArrowUpRight, Award, Calendar, BookOpen } from "lucide-react";
import { featuredPublications } from "@/data/publications";

export default function FeaturedPublication() {
  const paper = featuredPublications.find((p) => p.featured);

  if (!paper) return null;

  return (
    <section
      className="
        relative overflow-hidden rounded-3xl
        bg-gradient-to-r
        from-slate-900
        via-blue-900
        to-blue-700
        p-10
        text-white
        shadow-2xl
      "
    >
      {/* Decorative background */}
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative grid gap-10 lg:grid-cols-[120px_1fr] items-start">

        {/* Icon */}
        <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10 backdrop-blur">
          <Award size={46} />
        </div>

        <div>

          <div className="flex flex-wrap gap-3">

            <span className="rounded-full bg-amber-400 px-4 py-1 text-sm font-semibold text-slate-900">
              ⭐ Featured Publication
            </span>

            <span className="rounded-full bg-white/15 px-4 py-1 text-sm">
              {paper.journal}
            </span>

            <span className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm">
              <Calendar size={15} />
              {paper.year}
            </span>

          </div>

          <h2 className="mt-8 text-4xl font-bold leading-tight">
            {paper.title}
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            {paper.highlight}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <span className="rounded-full bg-white/15 px-4 py-2">
              {paper.theme}
            </span>

            <span className="rounded-full bg-white/15 px-4 py-2 flex items-center gap-2">
              <BookOpen size={16} />
              Flagship Research
            </span>

          </div>

          <a
            href={paper.doi}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-10 inline-flex
              items-center gap-2
              rounded-xl
              bg-white
              px-6
              py-3
              font-semibold
              text-blue-700
              transition
              hover:scale-105
            "
          >
            Read Publication
            <ArrowUpRight size={18} />
          </a>

        </div>
      </div>
    </section>
  );
}