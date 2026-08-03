"use client";

import { BookOpen, Presentation, Award } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const tabs = [
  {
    name: "Journal",
    icon: BookOpen,
    color: "text-blue-600",
  },
  {
    name: "Conference",
    icon: Presentation,
    color: "text-emerald-600",
  },
  {
    name: "Patent",
    icon: Award,
    color: "text-amber-600",
  },
];

export default function PublicationTabs({
  value,
  onChange,
}: Props) {
  return (
    <div className="flex justify-center">

      <div className="flex gap-10 border-b border-slate-200">

        {tabs.map((tab) => {

          const Icon = tab.icon;
          const active = value === tab.name;

          return (

            <button
              key={tab.name}
              onClick={() => onChange(tab.name)}
              className={`
                relative
                flex
                items-center
                gap-2
                pb-4
                text-lg
                font-semibold
                transition-all
                duration-300
                ${
                  active
                    ? `${tab.color}`
                    : "text-slate-500 hover:text-slate-800"
                }
              `}
            >

              <Icon size={18} />

              {tab.name}

              {active && (
                <span
                  className="absolute -bottom-[1px] left-0 h-[3px] w-full rounded-full bg-current"
                />
              )}

            </button>

          );
        })}

      </div>

    </div>
  );
}