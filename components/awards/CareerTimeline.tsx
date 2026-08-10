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
    file: "/certificates/GATE_2017.pdf",
  },
];

type Props = {
  onOpen: (file: string, title: string) => void;
};

export default function CareerTimeline({ onOpen }: Props) {
  return (
    <div className="w-full min-w-0">

      {/* ===================================================== */}
      {/* TITLE */}
      {/* ===================================================== */}

      <div className="mb-6 text-center sm:mb-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Career Milestones
        </h2>
      </div>

      {/* ===================================================== */}
      {/* TIMELINE */}
      {/* ===================================================== */}

      <div className="relative mx-auto w-full max-w-3xl">

        {/* Timeline line */}

        <div
          className="
            absolute
            bottom-0
            left-5
            top-0
            z-0
            w-1
            rounded-full
            bg-blue-100
            sm:left-1/2
            sm:-translate-x-1/2
          "
        />

        {/* Milestones */}

        <div className="space-y-6 sm:space-y-0">

          {milestones.map((item, index) => {
            const Icon = item.icon;
            const left = index % 2 === 0;

            return (
              <div
                key={`${item.year}-${item.title}`}
                className="
                  relative
                  grid
                  grid-cols-[42px_minmax(0,1fr)]
                  items-start
                  sm:grid-cols-[1fr_70px_1fr]
                  sm:items-center
                "
              >

                {/* ================================================= */}
                {/* MOBILE ICON */}
                {/* ================================================= */}

                <div className="relative z-10 flex justify-center sm:hidden">

                  <div
                    className={`
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      text-white
                      shadow-lg
                      ${item.color}
                    `}
                  >
                    <Icon size={18} />
                  </div>

                </div>

                {/* ================================================= */}
                {/* DESKTOP LEFT CARD */}
                {/* ================================================= */}

                {left ? (
                  <div className="hidden justify-end pr-4 sm:flex">
                    <TimelineCard
                      item={item}
                      onOpen={onOpen}
                    />
                  </div>
                ) : (
                  <div className="hidden sm:block" />
                )}

                {/* ================================================= */}
                {/* DESKTOP ICON */}
                {/* ================================================= */}

                <div className="hidden justify-center sm:flex">

                  <div
                    className={`
                      relative
                      z-10
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      text-white
                      shadow-xl
                      ${item.color}
                    `}
                  >
                    <Icon size={24} />
                  </div>

                </div>

                {/* ================================================= */}
                {/* DESKTOP RIGHT CARD */}
                {/* ================================================= */}

                {!left ? (
                  <div className="hidden justify-start pl-4 sm:flex">
                    <TimelineCard
                      item={item}
                      onOpen={onOpen}
                    />
                  </div>
                ) : (
                  <div className="hidden sm:block" />
                )}

                {/* ================================================= */}
                {/* MOBILE CARD */}
                {/* ================================================= */}

                <div className="min-w-0 pl-3 sm:hidden">

                  <TimelineCard
                    item={item}
                    onOpen={onOpen}
                  />

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}


/* =============================================================
   TIMELINE CARD
============================================================= */

function TimelineCard({
  item,
  onOpen,
}: {
  item: (typeof milestones)[0];
  onOpen: (file: string, title: string) => void;
}) {
  return (
    <div className="min-w-0 max-w-full">

      {/* Year */}

      <span className="text-sm font-semibold text-blue-600">
        {item.year}
      </span>

      {/* Title */}

      <h3 className="mt-1 break-words text-xl font-bold leading-tight text-slate-900 sm:text-2xl">
        {item.title}
      </h3>

      {/* Place */}

      <p className="mt-1 break-words text-sm leading-6 text-slate-600 sm:text-base">
        {item.place}
      </p>

      {/* Certificate */}

      <button
        type="button"
        onClick={() => onOpen(item.file, item.title)}
        className="
          mt-3
          rounded-lg
          bg-blue-600
          px-4
          py-2
          text-sm
          font-semibold
          text-white
          transition
          hover:bg-blue-700
          active:bg-blue-800
        "
      >
        View Certificate
      </button>

    </div>
  );
}