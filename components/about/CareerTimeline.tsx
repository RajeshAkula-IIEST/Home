"use client";

import timeline from "@/data/timeline";
import {
  GraduationCap,
  Microscope,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";

export default function CareerTimeline() {
  return (
    <div className="mb-8 sm:mb-10">

      {/* ===================================================== */}
      {/* TIMELINE HEADING */}
      {/* ===================================================== */}

      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 sm:text-sm sm:tracking-[0.25em]">
        TIMELINE
      </p>

      {/* ===================================================== */}
      {/* TIMELINE */}
      {/* ===================================================== */}

      <div className="relative mt-5 sm:mt-6">

        {/* Vertical line */}

        <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-blue-500 via-violet-500 to-emerald-500 sm:left-5" />

        <div className="space-y-5 sm:space-y-6">

          {timeline.map((item, index) => {

            const Icon =
              item.type === "education"
                ? GraduationCap
                : item.type === "research"
                ? Microscope
                : Briefcase;

            const color =
              item.type === "education"
                ? "bg-blue-600"
                : item.type === "research"
                ? "bg-violet-600"
                : "bg-emerald-600";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                className="relative flex gap-4 sm:gap-6"
              >

                {/* Timeline icon */}

                <div
                  className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white shadow-md sm:h-10 sm:w-10 ${color}`}
                >
                  <Icon
                    size={16}
                    className="sm:hidden"
                  />

                  <Icon
                    size={18}
                    className="hidden sm:block"
                  />
                </div>

                {/* Timeline content */}

                <div className="min-w-0 flex-1 pb-1">

                  <p className="text-base font-bold tracking-wide text-blue-600 sm:text-lg sm:tracking-wider">
                    {item.year}
                  </p>

                  <h4 className="mt-1.5 text-base font-bold leading-snug text-slate-900 sm:mt-2 sm:text-[1.2rem]">
                    {item.title}
                  </h4>

                  <p className="mt-1.5 text-sm leading-6 text-slate-600 sm:mt-2 sm:text-[1.08rem] sm:leading-7">
                    {item.organization}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </div>
  );
}