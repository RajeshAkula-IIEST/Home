import {
  GraduationCap,
  Microscope,
  Globe,
  Briefcase,
} from "lucide-react";

export default function AboutContent() {
  return (
    <div className="w-full">

      {/* ===================================================== */}
      {/* SECTION HEADING */}
      {/* ===================================================== */}

      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 sm:text-sm sm:tracking-[0.25em]">
        ABOUT
      </p>

      <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:mt-3 sm:text-3xl">
        Academic Journey
      </h2>

      {/* ===================================================== */}
      {/* INTRODUCTION */}
      {/* ===================================================== */}

      <p className="mt-3 text-base leading-7 text-justify text-slate-700 sm:text-lg sm:leading-8">
        My academic journey has been driven by a passion for
        sustainable energy technologies. Through doctoral and
        postdoctoral research in India and Canada, I have developed
        expertise in battery thermal management, computational
        modelling and artificial intelligence for advanced battery
        systems.
      </p>

      {/* ===================================================== */}
      {/* RESEARCH PHILOSOPHY */}
      {/* ===================================================== */}

      <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:mt-6 sm:rounded-3xl sm:p-6">

        <h3 className="text-base font-bold text-slate-900 sm:text-lg">
          Research Philosophy
        </h3>

        <p className="mt-3 text-base italic leading-7 text-justify text-slate-600 sm:mt-4 sm:text-lg sm:leading-8">
          "Engineering research should combine scientific
          excellence with practical impact. Experiments,
          computational modelling and artificial intelligence
          must work together to solve real-world energy
          challenges."
        </p>

      </div>

      {/* ===================================================== */}
      {/* MILESTONES */}
      {/* ===================================================== */}

      <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-4">

        {/* Direct Ph.D. */}

        <div className="rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center shadow-sm sm:px-5 sm:py-4">

          <GraduationCap className="mx-auto h-6 w-6 text-blue-600" />

          <h4 className="mt-2 text-sm font-semibold text-slate-900 sm:mt-3 sm:text-base">
            Direct Ph.D.
          </h4>

          <p className="mt-1 text-xs text-slate-500 sm:text-sm">
            IIT Madras
          </p>

        </div>

        {/* Postdoctoral Research */}

        <div className="rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center shadow-sm sm:px-5 sm:py-4">

          <Microscope className="mx-auto h-6 w-6 text-violet-600" />

          <h4 className="mt-2 text-sm font-semibold text-slate-900 sm:mt-3 sm:text-base">
            Postdoctoral Research
          </h4>

          <p className="mt-1 text-xs text-slate-500 sm:text-sm">
            IIT Bombay
          </p>

        </div>

        {/* International Research */}

        <div className="rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center shadow-sm sm:px-5 sm:py-4">

          <Globe className="mx-auto h-6 w-6 text-emerald-600" />

          <h4 className="mt-2 text-sm font-semibold text-slate-900 sm:mt-3 sm:text-base">
            International Research
          </h4>

          <p className="mt-1 text-xs text-slate-500 sm:text-sm">
            University of Toronto (Canada)
          </p>

        </div>

        {/* Faculty */}

        <div className="rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center shadow-sm sm:px-5 sm:py-4">

          <Briefcase className="mx-auto h-6 w-6 text-amber-600" />

          <h4 className="mt-2 text-sm font-semibold text-slate-900 sm:mt-3 sm:text-base">
            Faculty
          </h4>

          <p className="mt-1 text-xs text-slate-500 sm:text-sm">
            IIEST Shibpur
          </p>

        </div>

      </div>

    </div>
  );
}