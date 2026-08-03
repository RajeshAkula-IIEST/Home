import {
  BatteryCharging,
  BrainCircuit,
  Thermometer,
  Zap,
} from "lucide-react";

const research = [
  {
    title: "Battery Thermal Management",
    icon: BatteryCharging,
    description:
      "Developing advanced thermal management strategies for lithium-ion batteries through experiments, modelling, and innovative cooling technologies.",

    tags: [
      "Thermal Runaway",
      "PCM Cooling",
      "Liquid Cooling",
    ],
  },

  {
    title: "Artificial Intelligence for Battery Systems",
    icon: BrainCircuit,
    description:
      "Applying machine learning and deep learning models to battery diagnostics, thermal prediction, state estimation, and surrogate modelling.",

    tags: [
      "CNN",
      "ConvLSTM",
      "Transformers",
    ],
  },

  {
    title: "Thermal Characterization & Modelling",
    icon: Thermometer,
    description:
      "Combining infrared thermography, inverse heat transfer, and numerical simulations to understand battery thermal behaviour.",

    tags: [
      "IR Thermography",
      "Inverse Heat Transfer",
      "COMSOL",
    ],
  },

  {
    title: "Energy Storage Technologies",
    icon: Zap,
    description:
      "Research on lithium-ion batteries, battery packs, electrochemical systems, ageing mechanisms, and next-generation energy storage.",

    tags: [
      "Li-ion",
      "Battery Packs",
      "Diagnostics",
    ],
  },
];

export default research;