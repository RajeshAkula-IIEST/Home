export interface Award {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: "patent" | "gate" | "fellowship";
  featured?: boolean;
  certificate?: string;
}

export const awards: Award[] = [
  {
    year: "2025",
    title: "Granted Indian Patent",
    subtitle: "Smart Thermal Management System",
    description:
      "Granted an Indian patent for an intelligent thermal management system for lithium-ion battery modules.",
    icon: "patent",
    featured: true,
    certificate: "/certificates/patent.pdf",
  },

  {
    year: "2022",
    title: "Postdoctoral Equivalent Fellowship",
    subtitle: "Indian Institute of Technology Madras",
    description:
      "Awarded for submitting the PhD thesis within 60 months.",
    icon: "fellowship",
  },

  {
    year: "2017",
    title: "GATE 2017",
    subtitle: "Mechanical Engineering",
    description:
      "AIR 1549 with a GATE score of 754.",
    icon: "gate",
  },
];