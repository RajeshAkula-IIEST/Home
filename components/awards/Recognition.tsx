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
    <div className="w-full min-w-0 max-w-full">

      {/* ===================================================== */}
      {/* HEADING */}
      {/* ===================================================== */}

      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
        Research Recognition
      </h2>

      {/* ===================================================== */}
      {/* RECOGNITION SCROLL */}
      {/* ===================================================== */}

      <div className="recognition-scroll mt-5 w-full max-w-full overflow-hidden sm:mt-8">

        <div className="recognition-track w-full max-w-full">

          {[...recognitions, ...recognitions].map((item, index) => (
            <div
              key={index}
              className="
                flex
                min-w-0
                max-w-full
                items-start
                gap-3
                rounded-xl
                p-2
                transition-all
                duration-300
                hover:bg-slate-50
                sm:gap-4
              "
            >

              {/* Icon */}

              <CheckCircle2
                className="
                  mt-1
                  h-5
                  w-5
                  shrink-0
                  text-emerald-500
                  sm:h-6
                  sm:w-6
                "
              />

              {/* Recognition */}

              <p
                className="
                  min-w-0
                  flex-1
                  break-words
                  text-justify
                  text-base
                  leading-7
                  text-slate-700
                  sm:text-[1.05rem]
                  sm:leading-8
                "
              >
                {item}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}