"use client";

import { CheckCircle2 } from "lucide-react";

const recognitions = [
  "Granted Indian Patent on Lithium-Ion Battery Thermal Management System",
  "Led a industry-sponsored research project on battery thermal management between University of Toronto and Ford Canada",
  "Published 13 SCI-indexed journal papers and presented in 8 international conferences",
  "Delivered invited expert lectures in various Faculty Development Programs",
  "Research experience across IIT Madras, IIT Bombay, University of Toronto and IIEST Shibpur",
];

export default function Recognition() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-3xl font-bold text-slate-900">
        Research Recognition
      </h2>

      <div className="mt-8 recognition-scroll overflow-hidden">

        <div className="recognition-track">

          {[...recognitions, ...recognitions].map((item, index) => (

            <div
              key={index}
              className="flex items-start gap-4 rounded-xl p-2 transition-all duration-300 hover:bg-slate-50"
            >

              <CheckCircle2
                className="mt-1 h-6 w-6 flex-shrink-0 text-emerald-500"
              />

              <p className="flex-1 text-justify text-[1.05rem] leading-8 text-slate-700">
                {item}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}