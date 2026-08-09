export default function ResearchAreas() {
  return (
    <div className="w-full">

      {/* ===================================================== */}
      {/* RESEARCH THEMES */}
      {/* ===================================================== */}

      <h2 className="mt-8 text-2xl font-bold text-slate-900 sm:mt-10 sm:text-3xl">
        Research Themes
      </h2>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">

        {/* ================================================= */}
        {/* BATTERY THERMAL MANAGEMENT */}
        {/* ================================================= */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-6">

          <div className="flex items-center gap-3 sm:gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-2xl sm:h-14 sm:w-14 sm:text-3xl">
              🔋
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                Battery Thermal
              </h3>

              <p className="text-base font-semibold text-blue-700 sm:text-lg">
                Management
              </p>
            </div>

          </div>

          <p className="mt-4 text-justify text-base leading-7 text-slate-600 sm:mt-5 sm:leading-8">
            Developing advanced thermal management technologies for Li-ion
            battery packs with focus on cooling, safety and fast charging.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">

            <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 sm:px-4 sm:py-2 sm:text-sm">
              Cooling
            </span>

            <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 sm:px-4 sm:py-2 sm:text-sm">
              PCM
            </span>

            <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 sm:px-4 sm:py-2 sm:text-sm">
              Fast Charging
            </span>

          </div>

        </div>

        {/* ================================================= */}
        {/* ARTIFICIAL INTELLIGENCE */}
        {/* ================================================= */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-6">

          <div className="flex items-center gap-3 sm:gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-2xl sm:h-14 sm:w-14 sm:text-3xl">
              🤖
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                Artificial
              </h3>

              <p className="text-base font-semibold text-emerald-700 sm:text-lg">
                Intelligence
              </p>
            </div>

          </div>

          <p className="mt-4 text-justify text-base leading-7 text-slate-600 sm:mt-5 sm:leading-8">
            Building intelligent data-driven models for battery diagnostics,
            prediction, and thermal characterization.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">

            <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 sm:px-4 sm:py-2 sm:text-sm">
              Deep Learning
            </span>

            <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 sm:px-4 sm:py-2 sm:text-sm">
              Vision
            </span>

            <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 sm:px-4 sm:py-2 sm:text-sm">
              Prediction
            </span>

          </div>

        </div>

        {/* ================================================= */}
        {/* ENERGY STORAGE */}
        {/* ================================================= */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-6">

          <div className="flex items-center gap-3 sm:gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-2xl sm:h-14 sm:w-14 sm:text-3xl">
              ⚡
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                Energy
              </h3>

              <p className="text-base font-semibold text-amber-700 sm:text-lg">
                Storage
              </p>
            </div>

          </div>

          <p className="mt-4 text-justify text-base leading-7 text-slate-600 sm:mt-5 sm:leading-8">
            Research on electrochemical energy storage systems, battery
            materials, testing methods and characterization techniques.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">

            <span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-700 sm:px-4 sm:py-2 sm:text-sm">
              Li-ion
            </span>

            <span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-700 sm:px-4 sm:py-2 sm:text-sm">
              Testing
            </span>

            <span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-700 sm:px-4 sm:py-2 sm:text-sm">
              Characterization
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}