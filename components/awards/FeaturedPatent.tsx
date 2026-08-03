"use client";

import {
  Award,
  FileText,
  Calendar,
  Hash,
  ArrowRight,
} from "lucide-react";

type Props = {
  onViewPatent: () => void;
};

export default function FeaturedPatent({
  onViewPatent,
}: Props) {
  return (
    <section className="mt-16">

      <div className="overflow-hidden rounded-3xl border border-yellow-300 bg-gradient-to-r from-yellow-50 via-white to-amber-50 shadow-lg">

        <div className="grid gap-10 lg:grid-cols-[120px_1fr] p-10">

          {/* Left */}

          <div className="flex justify-center">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-yellow-100 text-yellow-600 shadow">

              <Award size={46} />

            </div>

          </div>

          {/* Right */}

          <div>

            <span className="rounded-full bg-yellow-200 px-4 py-2 text-sm font-bold text-yellow-800">
              Featured Achievement
            </span>

            <h2 className="mt-5 text-4xl font-extrabold text-slate-900">
              Granted Indian Patent
            </h2>

            <h3 className="mt-4 max-w-5xl text-2xl font-semibold leading-10 text-slate-700">
              SMART THERMAL MANAGEMENT SYSTEM
              <br />
              FOR LITHIUM-ION BATTERY MODULES
            </h3>

            <p className="mt-6 max-w-5xl text-lg leading-8 text-slate-600">
              An intelligent thermal management system designed to
              improve the safety, temperature uniformity and thermal
              performance of lithium-ion battery modules used in
              electric vehicles and energy storage applications.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">

              <Info
                icon={<Hash size={18} />}
                title="Application No."
                value="202521082797"
              />

              <Info
                icon={<Calendar size={18} />}
                title="Filed"
                value="01 Sept 2025"
              />

              <Info
                icon={<Award size={18} />}
                title="Status"
                value="Granted"
              />

            </div>

            <button
              onClick={onViewPatent}
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <FileText size={20} />

              View Patent Certificate

              <ArrowRight size={18} />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

function Info({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">

      <div className="flex items-center gap-2 text-blue-600">

        {icon}

        <span className="text-sm font-semibold">
          {title}
        </span>

      </div>

      <h4 className="mt-3 text-lg font-bold text-slate-900">
        {value}
      </h4>

    </div>
  );
}