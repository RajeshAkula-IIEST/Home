import {
  BookOpen,
  FileText,
  Award,
  Users,
} from "lucide-react";

const contributions = [
  {
    icon: BookOpen,
    value: "13+",
    label: "Journal Publications",
  },
  {
    icon: FileText,
    value: "18+",
    label: "Conference Papers",
  },
  {
    icon: Award,
    value: "1",
    label: "Granted Patent",
  },
  {
    icon: Users,
    value: "10+",
    label: "Students Mentored",
  },
];

export default function ResearchContribution() {
  return (
    <div>

      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
        RESEARCH CONTRIBUTIONS
      </p>

      <h2 className="mt-2 text-4xl font-bold text-slate-900">
        Research Output
      </h2>

      <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">

        {contributions.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.label}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                text-center
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >

              <Icon
                className="mx-auto h-8 w-8 text-blue-600"
              />

              <h3 className="mt-4 text-4xl font-bold text-slate-900">
                {item.value}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {item.label}
              </p>

            </div>

          );

        })}

      </div>

    </div>
  );
}