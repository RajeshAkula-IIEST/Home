"use client";

import { BookOpen, Presentation, Award } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function PublicationStats({
  value,
  onChange,
}: Props) {
  const stats = [
    {
      category: "Journal",
      value: "13",
      label: "Journal Publications",
      icon: BookOpen,
      gradient: "from-blue-50 via-white to-blue-100",
      border: "border-t-blue-600",
      ring: "ring-blue-300",
      text: "text-blue-700",
    },
    {
      category: "Conference",
      value: "8",
      label: "Conference Papers",
      icon: Presentation,
      gradient: "from-emerald-50 via-white to-emerald-100",
      border: "border-t-emerald-600",
      ring: "ring-emerald-300",
      text: "text-emerald-700",
    },
    {
      category: "Patent",
      value: "1",
      label: "Granted Patent",
      icon: Award,
      gradient: "from-amber-50 via-white to-yellow-100",
      border: "border-t-amber-500",
      ring: "ring-amber-300",
      text: "text-amber-700",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {stats.map((item) => {
        const Icon = item.icon;
        const active = value === item.category;

        return (
          <button
            key={item.category}
            onClick={() => onChange(item.category)}
            className={`
              w-64
              rounded-2xl
              border
              border-slate-200
              border-t-4
              ${item.border}
              bg-gradient-to-br
              ${item.gradient}
              p-4
              text-center
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
              hover:scale-[1.02]
              ${
                active
                  ? "ring-2 ring-blue-500 shadow-xl scale-105"
                  : ""
              }
            `}
          >
            <div
              className={`
                mx-auto
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-white/80
                backdrop-blur
                shadow-md
                ring-1
                ${item.ring}
              `}
            >
              <div className="flex flex-col items-center">
                <Icon className={`mb-1 h-4 w-4 ${item.text}`} />
                <span className={`text-3xl font-black ${item.text}`}>
                  {item.value}
                </span>
              </div>
            </div>

            <h3 className="mt-3 text-lg font-bold text-slate-800">
              {item.label}
            </h3>
          </button>
        );
      })}
    </div>
  );
}