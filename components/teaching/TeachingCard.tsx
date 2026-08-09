type Props = {
  title: string;
  code: string;
  level: string;
  institute: string;
  semester: string;
};

export default function TeachingCard({
  title,
  code,
  level,
  institute,
  semester,
}: Props) {
  return (
    <article
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        sm:rounded-3xl
        sm:p-6
      "
    >

      {/* ===================================================== */}
      {/* COURSE HEADER */}
      {/* ===================================================== */}

      <div className="flex items-start justify-between gap-3">

        <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 sm:px-4 sm:py-2 sm:text-sm">
          {code}
        </span>

        <span className="shrink-0 text-xs font-medium text-slate-500 sm:text-sm">
          {semester}
        </span>

      </div>

      {/* ===================================================== */}
      {/* COURSE TITLE */}
      {/* ===================================================== */}

      <h3 className="mt-4 text-lg font-bold leading-snug text-slate-900 sm:text-xl">
        {title}
      </h3>

      {/* ===================================================== */}
      {/* LEVEL */}
      {/* ===================================================== */}

      <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
        {level}
      </p>

      {/* ===================================================== */}
      {/* INSTITUTE */}
      {/* ===================================================== */}

      <p className="mt-1 text-sm leading-6 text-slate-500 sm:text-base">
        {institute}
      </p>

    </article>
  );
}