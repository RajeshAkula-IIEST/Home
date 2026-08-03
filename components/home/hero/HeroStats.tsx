const stats = [
  {
    value: "13+",
    label: "Journal Publications",
    color: "text-blue-700",
    bg: "bg-blue-50",
  },
  {
    value: "8+",
    label: "Conference Papers",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
  },
  {
    value: "1",
    label: "Granted Patent",
    color: "text-amber-700",
    bg: "bg-amber-50",
  },
  {
    value: "10+",
    label: "Students Mentored",
    color: "text-purple-700",
    bg: "bg-purple-50",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-2 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {stats.map((item) => (

        <div
          key={item.label}
          className="rounded-2xl border border-slate-200 bg-white px-6 py-1 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >

          <div
            className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${item.bg}`}
          >
            <span className={`text-3xl font-extrabold ${item.color}`}>
              {item.value}
            </span>
          </div>

          <h3 className="mt-4 text-center text-base font-semibold text-slate-700">
            {item.label}
          </h3>

        </div>

      ))}

    </div>
  );
}