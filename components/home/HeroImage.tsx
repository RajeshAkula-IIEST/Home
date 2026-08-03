"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center lg:justify-end"
    >
      {/* Decorative Background */}
      <div className="absolute -top-6 -right-6 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-60" />

      {/* Portrait Card */}
      <div className="relative rounded-[2rem] bg-white p-4 shadow-2xl border border-slate-200">
        <Image
          src="/images/profile.jpg"
          alt="Dr. Rajesh Akula"
          width={430}
          height={540}
          priority
          className="rounded-[1.5rem] object-cover"
        />
      </div>

      {/* Floating Research Card */}
      <div className="absolute -bottom-6 -left-8 hidden md:block rounded-2xl bg-white px-5 py-4 shadow-xl border border-slate-200">
        <p className="text-xs uppercase tracking-widest text-blue-600 font-semibold">
          Research Focus
        </p>

        <h3 className="mt-1 text-lg font-bold text-slate-900">
          Battery Thermal
          <br />
          Management
        </h3>
      </div>
    </motion.div>
  );
}