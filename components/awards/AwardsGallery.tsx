"use client";

import {
  Trophy,
  GraduationCap,
  Award,
  ArrowRight,
} from "lucide-react";

type Props = {
  onOpen: (file: string, title: string) => void;
};

const awards = [
  {
    title: "Granted Indian Patent",
    subtitle: "Government of India",
    description:
      "Smart Thermal Management System for Lithium-Ion Battery Modules.",
    year: "2026",
    color: "yellow",
    icon: Award,
    file: "/certificates/PatentCertificate.pdf",
  },
  {
    title: "Institute Postdoctoral Fellowship",
    subtitle: "IIT Madras",
    description:
      "Awarded for submitting the PhD thesis within the prescribed duration.",
    year: "2022",
    color: "blue",
    icon: GraduationCap,
    file: "/certificates/IITM_Fellowship.pdf",
  },
  {
    title: "GATE 2017",
    subtitle: "Mechanical Engineering",
    description:
      "All India Rank 1549 with a GATE Score of 754.",
    year: "2017",
    color: "emerald",
    icon: Trophy,
    file: "/certificates/GATE2017.pdf",
  },
];

export default function AwardsGallery({
  onOpen,
}: Props) {
  return (
    <section className="mt-20">

      <div className="mb-10 text-center">

        <h2 className="text-4xl font-bold">
          Awards Gallery
        </h2>

        <p className="mt-3 text-lg text-slate-600">
          Major recognitions received during my academic career.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-3">

        {awards.map((item) => {

          const Icon = item.icon;

          const accent =
            item.color === "yellow"
              ? "border-yellow-300"
              : item.color === "blue"
              ? "border-blue-300"
              : "border-emerald-300";

          return (

            <div
              key={item.title}
              className={`rounded-3xl border ${accent} bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >

              <div className="flex items-center justify-between">

                <div className="rounded-2xl bg-slate-100 p-4">
                  <Icon size={30}/>
                </div>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold">
                  {item.year}
                </span>

              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-2 font-medium text-blue-600">
                {item.subtitle}
              </p>

              <p className="mt-5 leading-7 text-slate-600">
                {item.description}
              </p>

              <button
                onClick={() => onOpen(item.file, item.title)}
                className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800"
              >
                View Certificate
                <ArrowRight size={18}/>
              </button>

            </div>

          );
        })}

      </div>

    </section>
  );
}