"use client";
import timeline from "@/data/timeline";
import { GraduationCap, Microscope, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function CareerTimeline() {
  return (
    <div>

      <div className="mb-10">

       <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
  TIMELINE
</p>

<h3 className="mt-2 text-3xl font-bold text-slate-900">
  Academic & Research Journey
</h3>


      </div>

      <div className="relative">

        <div className="absolute left-5 top-2 h-full w-px bg-gradient-to-b from-blue-500 via-violet-500 to-emerald-500" />

        <div className="space-y-6">

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
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                className="relative flex gap-6"
              >

                <div
                  className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg ${color}`}
                >
                  <Icon size={18} />
                </div>

                <div>

                  <p className="text-lg font-bold tracking-wider text-blue-600">
                    {item.year}
                  </p>

                  <h4 className="mt-2 text-[1.2rem] font-bold leading-tight text-slate-900">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-[1.08rem] leading-7 text-slate-600">
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