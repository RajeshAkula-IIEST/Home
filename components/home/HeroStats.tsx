"use client";

import profile from "@/data/profile";
import {
  BookOpen,
  Lightbulb,
  GraduationCap,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

const icons = [
  BookOpen,
  Lightbulb,
  GraduationCap,
  Award,
];

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {profile.statistics.map((item, index) => {
        const Icon = icons[index];

        return (
          <div
            key={item.label}
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
            "
          >
            <Icon
              className="text-blue-600"
              size={30}
            />

            <h3 className="mt-5 text-4xl font-bold text-slate-900">
              {item.value}
            </h3>

            <p className="mt-2 text-slate-500">
              {item.label}
            </p>
          </div>
        );
      })}
    </motion.div>
  );
}