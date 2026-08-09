"use client";

import {
  BookOpen,
  Presentation,
  Award,
} from "lucide-react";

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
      shortLabel: "Journals",
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
      shortLabel: "Conferences",
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
      shortLabel: "Patent",
      icon: Award,
      gradient: "from-amber-50 via-white to-yellow-100",
      border: "border-t-amber-500",
      ring: "ring-amber-300",
      text: "text-amber-700",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 sm:flex sm:justify-center sm:gap-5">

      {stats.map((item) => {
        const Icon = item.icon;
        const active = value === item.category;

        return (
          <button
            key={item.category}
            type="button"
            onClick={() => onChange(item.category)}
            className={`
              min-w-0
              rounded-2xl
              border
              border-slate-200
              border-t-4
              ${item.border}
              bg-gradient-to-br
              ${item.gradient}
              px-2
              py-3
              text-center
              shadow-sm
              transition-all
              duration-300
              sm:w-64
              sm:p-4
              sm:hover:-translate-y-2
              sm:hover:scale-[1.02]
              sm:hover:shadow-xl
              ${
                active
                  ? "scale-[1.02] ring-2 ring-blue-500 shadow-lg sm:scale-105"
                  : ""
              }
            `}
          >

            {/* Icon + Number */}

            <div
              className={`
                mx-auto
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white/80
                shadow-sm
                ring-1
                ${item.ring}
                sm:h-16
                sm:w-16
                sm:shadow-md
              `}
            >
              <div className="flex flex-col items-center">

                <Icon
                  className={`mb-0.5 h-3.5 w-3.5 ${item.text} sm:mb-1 sm:h-4 sm:w-4`}
                />

                <span
                  className={`text-xl font-black ${item.text} sm:text-3xl`}
                >
                  {item.value}
                </span>

              </div>
            </div>

            {/* Label */}

            <h3 className="mt-2 text-[11px] font-bold leading-tight text-slate-800 sm:mt-3 sm:text-lg">
              <span className="sm:hidden">
                {item.shortLabel}
              </span>

              <span className="hidden sm:inline">
                {item.label}
              </span>
            </h3>

          </button>
        );
      })}

    </div>
  );
}