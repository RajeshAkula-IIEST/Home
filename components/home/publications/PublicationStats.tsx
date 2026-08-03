export default function PublicationStats() {
  const stats = [
    {
      value: "13+",
      label: "Journal Publications",
      color: "bg-blue-50 text-blue-700",
    },
    {
      value: "18+",
      label: "Conference Papers",
      color: "bg-emerald-50 text-emerald-700",
    },
    {
      value: "1",
      label: "Granted Patent",
      color: "bg-amber-50 text-amber-700",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition hover:shadow-md"
        >
          <div
            className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full text-4xl font-bold ${item.color}`}
          >
            {item.value}
          </div>

          <p className="mt-5 text-lg font-semibold text-slate-800">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}