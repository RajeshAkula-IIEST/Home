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
      active: "bg-blue-600 text-white border-blue-600",
      inactive:
        "bg-white text-blue-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50",
    },
    {
      category: "Conference",
      value: "8",
      label: "Conference Papers",
      shortLabel: "Conferences",
      icon: Presentation,
      active: "bg-emerald-600 text-white border-emerald-600",
      inactive:
        "bg-white text-emerald-700 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50",
    },
    {
      category: "Patent",
      value: "1",
      label: "Granted Patent",
      shortLabel: "Patent",
      icon: Award,
      active: "bg-amber-500 text-white border-amber-500",
      inactive:
        "bg-white text-amber-700 border-slate-200 hover:border-amber-300 hover:bg-amber-50",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 sm:flex sm:justify-center sm:gap-4">

      {stats.map((item) => {
        const Icon = item.icon;
        const selected = value === item.category;

        return (
          <button
            key={item.category}
            type="button"
            onClick={() => onChange(item.category)}
            aria-pressed={selected}
            className={`
              min-w-0
              flex-1
              rounded-2xl
              border-2
              px-2
              py-3
              text-center
              transition-all
              duration-200
              sm:w-64
              sm:flex-none
              sm:px-4
              sm:py-4
              ${
                selected
                  ? `${item.active} shadow-md`
                  : `${item.inactive} shadow-sm`
              }
            `}
          >

            {/* Icon */}

            <Icon
              className="mx-auto h-5 w-5 sm:h-6 sm:w-6"
            />

            {/* Count */}

            <div className="mt-1 text-xl font-black sm:mt-2 sm:text-3xl">
              {item.value}
            </div>

            {/* Mobile label */}

            <div className="mt-1 text-[10px] font-semibold leading-tight sm:hidden">
              {item.shortLabel}
            </div>

            {/* Desktop label */}

            <div className="mt-1 hidden text-sm font-semibold sm:block sm:text-lg">
              {item.label}
            </div>

          </button>
        );
      })}

    </div>
  );
}