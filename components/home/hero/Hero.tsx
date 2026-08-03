import Image from "next/image";

import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-sky-50">
      <div className="mx-auto max-w-[1200px] px-6 pt-0 pb-4">

        {/* ===================================================== */}
        {/* TOP */}
        {/* ===================================================== */}

        <div className="grid items-center gap-12 lg:grid-cols-[1.45fr_0.55fr]">

          {/* LEFT */}

          <div>
            <div className="h-6"></div>
            <div className="h-6"></div>
            <h1 className="text-6xl font-black tracking-tight text-slate-900">
              Dr. Rajesh Akula
            </h1>

            <h2 className="mt-5 text-2xl font-semibold text-slate-800">
              Assistant Professor (Mechanical Engineering)
            </h2>

            <h2 className="mt-5 text-2xl font-semibold text-slate-800">
              Adjunct Assistant Professor (CCSID)
            </h2>

            <p className="mt-3 text-lg text-sky-700">
              Indian Institute of Engineering Science and Technology (IIEST),
              Shibpur
            </p>
            <div className="h-6"></div>
            
            <h2 className="mt-2 text-xl text-slate-700">
              Research Themes:
            </h2>
          </div>

          {/* PHOTO */}

          <div className="flex justify-center lg:justify-end">

            <Image
              src="/profile.jpg"
              alt="Dr. Rajesh Akula"
              width={300}
              height={380}
              priority
              className="rounded-3xl border-4 border-white object-cover shadow-xl"
            />

          </div>

        </div>
        {/* ===================================================== */}
        {/* RESEARCH THEMES */}
        {/* ===================================================== */}

        <div className="mt-4 grid gap-4 lg:grid-cols-3">

          {/* Battery */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                🔋
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Battery Thermal
                </h3>

                <p className="text-lg font-semibold text-blue-700">
                  Management
                </p>
              </div>

            </div>

            <p className="mt-5 text-justify leading-8 text-slate-600">
              Developing advanced thermal management technologies for Li-ion
              battery packs with focus on cooling, safety and fast charging.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">

              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                Cooling
              </span>

              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                PCM
              </span>

              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                Fast Charging
              </span>

            </div>

          </div>

          {/* AI */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
                🤖
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Artificial
                </h3>

                <p className="text-lg font-semibold text-emerald-700">
                  Intelligence
                </p>
              </div>

            </div>

            <p className="mt-5 text-justify leading-8 text-slate-600">
              Building intelligent data-driven models for battery diagnostics,
              prediction, and thermal characterization.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">

              <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                Deep Learning
              </span>

              <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                Vision
              </span>

              <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                Prediction
              </span>

            </div>

          </div>

          {/* Energy */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-3xl">
                ⚡
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Energy
                </h3>

                <p className="text-lg font-semibold text-amber-700">
                  Storage
                </p>
              </div>

            </div>

            <p className="mt-5 text-justify leading-8 text-slate-600">
              Research on electrochemical energy storage systems, battery
              materials, testing methods and characterization techniques.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">

              <span className="rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
                Li-ion
              </span>

              <span className="rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
                Testing
              </span>

              <span className="rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
                Characterization
              </span>

            </div>

          </div>

        </div>

        {/* ===================================================== */}
        {/* STATS */}
        {/* ===================================================== */}

        <div className="mt-4">
          <HeroStats />
        </div>

      </div>
    </section>
  );
}