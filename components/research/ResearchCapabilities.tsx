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
    <div>


      <h2 className="mt-4 text-3xl font-bold text-slate-900">
        Expertise 
      </h2>

     <div className="mt-4 grid gap-2 lg:grid-cols-4">

        {capabilities.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >

              <div className="flex items-center gap-4">

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.bg}`}
                >
                  <Icon
                    className={item.color}
                    size={28}
                  />
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

              </div>

              <ul className="mt-6 space-y-2">

                {item.items.map((point) => (

                  <li
                    key={point}
                    className="flex items-center gap-3 text-slate-600"
                  >

                    <span className="h-2 w-2 rounded-full bg-blue-500" />

                    {point}

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