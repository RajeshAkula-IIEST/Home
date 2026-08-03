"use client";

const stats = [
  ["13+", "SCI Publications"],
  ["8", "Conference Papers"],
  ["1", "Granted Patent"],
  ["6+", "Major Achievements"],
];

export default function AchievementSummary() {
  return (
    <section className="mt-20 rounded-3xl bg-gradient-to-r from-blue-700 to-blue-900 px-10 py-16 text-white">

      <h2 className="text-center text-4xl font-bold">
        Academic Achievement Summary
      </h2>

      <div className="mt-14 grid gap-8 md:grid-cols-4">

        {stats.map(([value, label]) => (

          <div
            key={label}
            className="text-center"
          >

            <div className="text-5xl font-extrabold">
              {value}
            </div>

            <div className="mt-3 text-lg text-blue-100">
              {label}
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}