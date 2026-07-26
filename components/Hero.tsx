"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  BookOpen,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="gradient text-white min-h-screen flex items-center"
    >
      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[6px] text-gray-200 mb-4">
            Welcome
          </p>

          <h1 className="text-6xl font-bold leading-tight mb-6">
            Dr. Rajesh Akula
          </h1>

          <h2 className="text-2xl font-light mb-3">
            Assistant Professor
          </h2>

          <p className="text-lg opacity-90 mb-1">
            Department of Mechanical Engineering
          </p>

          <p className="text-lg opacity-90 mb-8">
            Indian Institute of Engineering Science and Technology
            (IIEST), Shibpur
          </p>

          <div className="space-y-2 text-xl mb-10">

            <p>🔋 Battery Thermal Management</p>

            <p>🤖 Artificial Intelligence</p>

            <p>⚡ Energy Storage</p>

            <p>🔥 Heat Transfer</p>

            <p>📊 Machine Learning</p>

          </div>

          <div className="flex flex-wrap gap-5">

            <button className="bg-accent text-black px-7 py-4 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition">

              <Download size={20} />

              Download CV

            </button>

            <button className="border border-white px-7 py-4 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition">

              <BookOpen size={20} />

              Explore Research

            </button>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="w-[420px] h-[420px] rounded-full glass flex items-center justify-center shadow-soft">

            <img
              src="/images/profile.jpg"
              alt="Rajesh Akula"
              className="w-[380px] h-[380px] rounded-full object-cover"
            />

          </div>
        </motion.div>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">

        <ArrowDown size={34} />

      </div>
    </section>
  );
}
