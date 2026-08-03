import { GraduationCap, Users, BookOpen } from "lucide-react";

export default function Mentoring() {
  const stats = [
    {
      icon: GraduationCap,
      value: "9",
      title: "M.Tech Students",
      subtitle: "IIT Madras",
    },
    {
      icon: GraduationCap,
      value: "1",
      title: "M.Tech Student",
      subtitle: "IIT Bombay",
    },
    {
      icon: BookOpen,
      value: "Ongoing",
      title: "B.Tech Projects",
      subtitle: "IIEST Shibpur",
    },
  ];

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-slate-900">
        Student Mentoring
      </h3>

      <p className="mt-3 max-w-3xl text-slate-600">
        I actively mentor undergraduate and postgraduate students in
        battery technology, thermal management, machine learning, and
        computational modelling, encouraging independent research and
        problem-solving.
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Icon className="mx-auto h-10 w-10 text-sky-600" />

              <h4 className="mt-5 text-4xl font-bold text-slate-900">
                {item.value}
              </h4>

              <p className="mt-2 font-semibold text-slate-800">
                {item.title}
              </p>

              <p className="text-slate-500">
                {item.subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}