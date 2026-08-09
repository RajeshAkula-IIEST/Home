import {
  GraduationCap,
  BookOpen,
} from "lucide-react";

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
    <div className="w-full">

      {/* ===================================================== */}
      {/* STUDENT MENTORING */}
      {/* ===================================================== */}

      <h2 className="mt-8 text-2xl font-bold text-slate-900 sm:mt-10 sm:text-3xl">
        Student Mentoring
      </h2>

      <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
        I actively mentor undergraduate and postgraduate students in
        battery technology, thermal management, machine learning, and
        computational modelling, encouraging independent research and
        problem-solving.
      </p>

      {/* ===================================================== */}
      {/* MENTORING STATISTICS */}
      {/* ===================================================== */}

      <div className="mt-5 grid gap-3 sm:mt-8 sm:gap-4 md:grid-cols-3">

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                text-center
                shadow-sm
                transition
                hover:-translate-y-1
                hover:shadow-lg
                sm:p-8
                sm:rounded-2xl
              "
            >

              <Icon className="mx-auto h-8 w-8 text-sky-600 sm:h-10 sm:w-10" />

              <h4 className="mt-3 text-3xl font-bold text-slate-900 sm:mt-5 sm:text-4xl">
                {item.value}
              </h4>

              <p className="mt-1 text-sm font-semibold text-slate-800 sm:mt-2 sm:text-base">
                {item.title}
              </p>

              <p className="text-sm text-slate-500">
                {item.subtitle}
              </p>

            </div>
          );
        })}

      </div>

    </div>
  );
}