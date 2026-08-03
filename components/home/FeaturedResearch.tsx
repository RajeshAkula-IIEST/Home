import { BatteryCharging, ArrowRight } from "lucide-react";

export default function FeaturedResearch() {
  return (
    <div
      className="
        relative overflow-hidden rounded-3xl
        bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500
        text-white
        p-10 md:p-14
        shadow-2xl
      "
    >
      {/* Decorative circles */}
      <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative grid gap-10 lg:grid-cols-[90px_1fr] items-start">
        {/* Icon */}
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 backdrop-blur">
          <BatteryCharging size={44} />
        </div>

        {/* Content */}
        <div>
          <span className="inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-medium">
            Featured Research Area
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight">
            Battery Thermal Management
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50">
            Developing advanced thermal management strategies for lithium-ion
            batteries through experiments, infrared thermography, inverse heat
            transfer, physics-based modelling, and AI-driven optimization to
            improve safety, fast charging, and battery lifespan.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Thermal Runaway",
              "PCM Cooling",
              "Liquid Cooling",
              "Fast Charging",
              "Battery Packs",
              "AI Optimization",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/15 px-4 py-2 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <button className="mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:scale-105">
            View Research
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}