import {
  BatteryCharging,
  Brain,
  Cpu,
  Flame,
} from "lucide-react";

const research = [
  {
    icon: BatteryCharging,
    title: "Battery Thermal\nManagement",
    text: "Thermal safety, cooling strategies and battery lifetime optimization.",
  },
  {
    icon: Brain,
    title: "Artificial\nIntelligence",
    text: "Deep learning, surrogate modelling and battery diagnostics.",
  },
  {
    icon: Cpu,
    title: "Energy\nStorage",
    text: "Lithium-ion batteries, electrochemical systems and battery packs.",
  },
  {
    icon: Flame,
    title: "Heat\nTransfer",
    text: "Inverse heat transfer, PCM cooling and thermal characterization.",
  },
];

export default function ResearchSnapshot() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <p className="font-semibold uppercase tracking-[0.25em] text-sky-700">
            Research Snapshot
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Areas of Expertise
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {research.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-sky-300
                  hover:shadow-xl
                "
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">

                  <Icon size={34} />

                </div>

                <h3 className="whitespace-pre-line text-2xl font-bold leading-tight text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {item.text}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}