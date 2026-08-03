"use client";

import {
  Trophy,
  GraduationCap,
  BadgeCheck,
} from "lucide-react";

function StatCard({
  icon,
  value,
  label,
  color,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div
        className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${color}`}
      >
        {icon}
      </div>

      <h2 className="text-4xl font-extrabold text-slate-900">
        {value}
      </h2>

      <p className="mt-2 text-lg text-slate-600">
        {label}
      </p>

    </div>
  );
}

export default function AwardStats() {
  return (
    <section className="mt-14">

      <div className="grid gap-6 md:grid-cols-3">

        <StatCard
          icon={<Trophy size={32} />}
          value="6+"
          label="Major Achievements"
          color="bg-yellow-100 text-yellow-600"
        />

        <StatCard
          icon={<GraduationCap size={32} />}
          value="2"
          label="Research Fellowships"
          color="bg-blue-100 text-blue-600"
        />

        <StatCard
          icon={<BadgeCheck size={32} />}
          value="1"
          label="Granted Patent"
          color="bg-emerald-100 text-emerald-600"
        />

      </div>

    </section>
  );
}