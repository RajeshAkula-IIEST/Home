import {
  GraduationCap,
  Microscope,
  Globe,
  Briefcase,
} from "lucide-react";

export default function AboutContent() {
  return (
    <div>

      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
        ABOUT
      </p>

      <h2 className="mt-3 text-3xl font-bold text-slate-900">
        Academic Journey
      </h2>

      <p className="mt-3 text-lg text-justify leading-8 text-slate-1000">
        My academic journey has been driven by a passion for
        sustainable energy technologies. Through doctoral and
        postdoctoral research in India and Canada, I have developed
        expertise in battery thermal management, computational
        modelling and artificial intelligence for advanced battery
        systems.
      </p>

      {/* Philosophy */}

      <div className="mt-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

        <h3 className="text-lg font-bold text-slate-900">
          Research Philosophy
        </h3>

        <p className="mt-4 text-lg italic text-justify leading-8 text-slate-600">
          "Engineering research should combine scientific
          excellence with practical impact. Experiments,
          computational modelling and artificial intelligence
          must work together to solve real-world energy
          challenges."
        </p>

      </div>

      {/* Milestones */}

      <div className="mt-3 grid grid-cols-2 gap-4">

        <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-center shadow-sm">
          <GraduationCap className="mx-auto h-5 w-8 text-blue-600" />
          <h4 className="mt-3 font-semibold">Direct Ph.D.</h4>
          <p className="text-sm text-slate-500">
            IIT Madras
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-center shadow-sm">
          <Microscope className="mx-auto h-5 w-8 text-violet-600" />
          <h4 className="mt-3 font-semibold">
            Postdoctoral Research
          </h4>
          <p className="text-sm text-slate-500">
            IIT Bombay
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-center shadow-sm">
          <Globe className="mx-auto h-5 w-8 text-emerald-600" />
          <h4 className="mt-3 font-semibold">
            International Research
          </h4>
          <p className="text-sm text-slate-500">
            University of Toronto (Canada)
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-center shadow-sm">
          <Briefcase className="mx-auto h-5 w-8 text-amber-600" />
          <h4 className="mt-3 font-semibold">
            Faculty
          </h4>
          <p className="text-sm text-slate-500">
            IIEST Shibpur
          </p>
        </div>

      </div>

    </div>
  );
}