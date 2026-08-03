"use client";

import {
  Trophy,
  GraduationCap,
  Award,
} from "lucide-react";

const milestones = [
  {
    year: "2026",
    title: "Granted Indian Patent",
    place: "Government of India",
    icon: Award,
    color: "bg-yellow-500",
    file: "/certificates/PatentCertificate.pdf",
  },
  {
    year: "2022",
    title: "Institute Postdoctoral Fellowship",
    place: "Indian Institute of Technology Madras",
    icon: GraduationCap,
    color: "bg-indigo-600",
    file: "/certificates/IITM_Fellowship.pdf",
  },
  {
    year: "2017",
    title: "GATE 2017",
    place: "AIR 1549 • Mechanical Engineering",
    icon: Trophy,
    color: "bg-emerald-600",
    file: "/certificates/GATE2017.pdf",
  },
];

type Props = {
  onOpen: (file: string, title: string) => void;
};

export default function CareerTimeline({ onOpen }: Props) {
  return (
    <section className="mt-8">

      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900">
          Career Milestones
        </h2>
      </div>

      <div className="relative mx-auto max-w-3xl">

        {/* Timeline */}
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 rounded-full bg-blue-100 z-0" />

        {milestones.map((item, index) => {

          const Icon = item.icon;
          const left = index % 2 === 0;

          return (

            <div
              key={item.year}
              className="grid grid-cols-[1fr_70px_1fr] items-center"
            >

              {/* LEFT CARD */}
              {left ? (
                <div className="flex justify-end pr-4">
                  <TimelineCard item={item} onOpen={onOpen} />
                </div>
              ) : (
                <div />
              )}

              {/* ICON */}
              <div className="flex justify-center">
                <div
                  className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl ${item.color}`}
                >
                  <Icon size={24} />
                </div>
              </div>

              {/* RIGHT CARD */}
              {!left ? (
                <div className="flex justify-start pl-4">
                  <TimelineCard item={item} onOpen={onOpen} />
                </div>
              ) : (
                <div />
              )}

            </div>

          );
        })}

      </div>

    </section>
  );
}

function TimelineCard({
  item,
  onOpen,
}: {
  item: (typeof milestones)[0];
  onOpen: (file: string, title: string) => void;
}) {
  return (
    <div className="w-[320px] rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <span className="text-sm font-semibold text-blue-600">
        {item.year}
      </span>

      <h3 className="mt-1 text-2xl font-bold">
        {item.title}
      </h3>

      <p className="mt-1 text-slate-600">
        {item.place}
      </p>

      <button
        onClick={() => onOpen(item.file, item.title)}
        className="mt-3 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        View Certificate
      </button>

    </div>
  );
}