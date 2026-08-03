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
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
          {code}
        </span>

        <span className="text-sm text-slate-500">
          {semester}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-slate-600">
        {level}
      </p>

      <p className="text-slate-500">
        {institute}
      </p>
    </div>
  );
}