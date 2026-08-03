import {
  BatteryCharging,
  Brain,
  Cpu,
  Thermometer,
  Zap,
  LineChart,
} from "lucide-react";

import profile from "@/data/profile";

const iconMap = {
  "Battery Thermal Management": BatteryCharging,
  "Artificial Intelligence": Brain,
  "Machine Learning": Cpu,
  "Heat Transfer": Thermometer,
  "Energy Storage": Zap,
  "Electrochemical Modelling": LineChart,
};

export default function HeroBadges() {
  return (
    <div className="flex flex-wrap gap-3">
      {profile.researchAreas.map((area) => {
        const Icon =
          iconMap[area as keyof typeof iconMap] ?? Cpu;

        return (
          <div
            key={area}
            className="
              flex items-center gap-2
              rounded-full
              border border-slate-200
              bg-white
              px-4 py-2
              text-sm
              font-medium
              text-slate-700
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-500
              hover:shadow-md
            "
          >
            <Icon
              size={16}
              className="text-blue-600"
            />

            {area}
          </div>
        );
      })}
    </div>
  );
}