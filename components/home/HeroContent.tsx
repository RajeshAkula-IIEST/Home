"use client";

import profile from "@/data/profile";
import Button from "@/components/ui/Button";
import HeroBadges from "./HeroBadges";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Greeting */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          Hello, I'm
        </p>

        <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-slate-900">
          {profile.name}
        </h1>

        <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-slate-700">
          {profile.designation}
        </h2>

        <p className="mt-2 text-lg text-slate-500">
          {profile.department}
        </p>

        <p className="text-lg text-slate-500">
          {profile.institute}
        </p>
      </div>

      {/* Description */}
      <p className="max-w-2xl text-lg leading-8 text-slate-600">
        {profile.shortDescription}
      </p>

      {/* Research Tags */}
      <HeroBadges />

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 pt-2">
        <Button href="/#research">
          Explore Research
          <ArrowRight size={18} />
        </Button>

        <Button
          href="/documents/Rajesh_Akula_CV.pdf"
          variant="secondary"
        >
          <Download size={18} />
          Download CV
        </Button>
      </div>
    </motion.div>
  );
}