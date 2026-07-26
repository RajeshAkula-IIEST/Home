"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  BookOpen,
  Mail,
  GraduationCap,
} from "lucide-react";

import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative gradient text-white overflow-hidden min-h-screen flex items-center"
    >
      {/* Background Glow */}

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-orange-400/20 blur-[120px]" />

      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <span className="uppercase tracking-[5px] text-blue-200">
            Welcome to my Academic Website
          </span>

          <h1 className="mt-5 text-6xl lg:text-7xl font-bold leading-tight">
            Dr. Rajesh Akula
          </h1>

          <h2 className="mt-4 text-2xl font-light">
            Assistant Professor
          </h2>

          <p className="mt-2 text-lg text-gray-200">
            Department of Mechanical Engineering
          </p>

          <p className="text-lg text-gray-200 mb-8">
            Indian Institute of Engineering Science and Technology
            (IIEST), Shibpur
          </p>

          <Typewriter />

          <p className="mt-8 leading-8 text-lg text-gray-100 max-w-xl">

            Passionate researcher working in
            Battery Thermal Management,
            Artificial Intelligence,
            Machine Learning,
            Heat Transfer,
            and Electrochemical Energy Storage.

          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="/documents/Rajesh_Akula_CV.pdf"
              className="bg-accent text-black px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:scale-105 transition"
            >
              <Download size={20} />

              Download CV
            </a>

            <a
              href="#research"
              className="border border-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-white hover:text-black transition"
            >
              <BookOpen size={20} />

              Research
            </a>

          </div>

          {/* Quick Stats */}

          <div className="grid grid-cols-3 gap-8 mt-14">

            <div>

              <h2 className="text-4xl font-bold">
                25+
              </h2>

              <p className="text-gray-200">
                Publications
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold">
                3+
              </h2>

              <p className="text-gray-200">
                Patents
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold">
                10+
              </h2>

              <p className="text-gray-200">
                Students
              </p>

            </div>

          </div>

          {/* Contact */}

          <div className="mt-10 flex gap-6">

            <Mail className="cursor-pointer hover:text-accent transition" />

            <GraduationCap className="cursor-pointer hover:text-accent transition" />

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, scale: .85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-white/10 blur-3xl scale-110" />

            <div className="glass rounded-full p-5">

              <Image
                src="/images/profile.jpg"
                alt="Dr. Rajesh Akula"
                width={420}
                height={420}
                priority
                className="rounded-full object-cover"
              />

            </div>

          </div>

        </motion.div>

      </div>

      {/* Scroll */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">

        <ArrowDown size={36} />

      </div>

    </section>
  );
}
