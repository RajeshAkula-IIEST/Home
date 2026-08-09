import {
  Microscope,
  Flame,
  Cpu,
  BrainCircuit,
} from "lucide-react";

const capabilities = [
  {
    icon: Microscope,
    color: "text-blue-600",
    bg: "bg-blue-50",
    title: "Experimental Research",
    items: [
      "Battery Testing",
      "Infrared Thermography",
      "Thermal Characterization",
    ],
  },

  {
    icon: Flame,
    color: "text-orange-600",
    bg: "bg-orange-50",
    title: "Thermal Sciences",
    items: [
      "Heat Transfer",
      "Phase Change Materials",
      "Battery Cooling",
    ],
  },

  {
    icon: Cpu,
    color: "text-violet-600",
    bg: "bg-violet-50",
    title: "Computational Modelling",
    items: [
      "COMSOL, ANSYS, & PyBaMM",
      "Inverse Heat Transfer",
      "Numerical Simulation",
    ],
  },

  {
    icon: BrainCircuit,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    title: "Artificial Intelligence",
    items: [
      "Deep Learning",
      "CNNs",
      "Surrogate Models",
    ],
  },
];

export default function ResearchCapabilities() {
  return (
    <div className="w-full">

      {/* ===================================================== */}
      {/* EXPERTISE */}
      {/* ===================================================== */}

      <h2 className="mt-8 text-2xl font-bold text-slate-900 sm:mt-10 sm:text-3xl">
        Expertise
      </h2>

      <div className="mt-4 grid gap-4 lg:grid-cols-4">

        {capabilities.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                sm:rounded-3xl
              "
            >

              {/* ================================================= */}
              {/* CARD HEADER */}
              {/* ================================================= */}

              <div className="flex items-center gap-3 sm:gap-4">

                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12 sm:rounded-2xl ${item.bg}`}
                >
                  <Icon
                    className={item.color}
                    size={24}
                  />
                </div>

                <h3 className="text-base font-bold leading-snug text-slate-900 sm:text-lg">
                  {item.title}
                </h3>

              </div>

              {/* ================================================= */}
              {/* EXPERTISE ITEMS */}
              {/* ================================================= */}

              <ul className="mt-4 space-y-2 sm:mt-6">

                {item.items.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-600 sm:text-base"
                  >

                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />

                    <span>{point}</span>

                  </li>
                ))}

              </ul>

            </div>
          );
        })}

      </div>

    </div>
  );
}