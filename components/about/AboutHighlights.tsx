import { GraduationCap, Globe, BatteryCharging } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Academic Journey",
    value: "10+ Years",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Globe,
    title: "International Experience",
    value: "India & Canada",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: BatteryCharging,
    title: "Research Focus",
    value: "Battery Systems & AI",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];

export default function AboutHighlights() {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-3">
      {highlights.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${item.bg}`}
            >
              <Icon className={item.color} size={20} />
            </div>

            <p className="text-sm text-slate-500">{item.title}</p>

            <h4 className="mt-1 font-semibold text-slate-900">
              {item.value}
            </h4>
          </div>
        );
      })}
    </div>
  );
}