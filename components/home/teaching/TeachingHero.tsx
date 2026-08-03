import { GraduationCap, Users, BookOpen, Laptop } from "lucide-react";

export default function TeachingHero() {
  const stats = [
    {
      icon: GraduationCap,
      value: "2",
      label: "Courses",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: Users,
      value: "100+",
      label: "Students",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      icon: BookOpen,
      value: "20+",
      label: "Assessments",
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      icon: Laptop,
      value: "24×7",
      label: "Digital Access",
      color: "text-violet-600",
      bg: "bg-violet-50",
    },
  ];

  return (
    <div className="grid gap-12 lg:grid-cols-[1.7fr_1fr] items-center">

      {/* Left */}

      <div>

        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">
          Teaching
        </p>

        <h1 className="mt-3 text-5xl font-bold leading-tight text-slate-900">
          Educating Future Mechanical Engineers
        </h1>

        <p className="mt-8 text-xl leading-10 text-slate-600 text-justify">
          I teach undergraduate and postgraduate courses in Artificial
          Intelligence, Battery Thermal Management, Energy Storage Systems,
          Thermal Sciences and Computational Engineering. My teaching combines
          conceptual understanding, hands-on experimentation, computational
          modelling, and digital learning to prepare students for research,
          industry and innovation.
        </p>

      </div>

      {/* Right */}

      <div className="grid grid-cols-2 gap-5">

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}
              >
                <Icon className={`h-7 w-7 ${item.color}`} />
              </div>

              <h3 className={`mt-5 text-3xl font-bold ${item.color}`}>
                {item.value}
              </h3>

              <p className="mt-2 text-base font-medium text-slate-600">
                {item.label}
              </p>

            </div>
          );
        })}

      </div>

    </div>
  );
}