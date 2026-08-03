"use client";

import { useState } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Hero from "@/components/home/hero/Hero";

import About from "@/components/about/About";
import Research from "@/components/research/Research";
import Highlights from "@/components/home/highlights/Highlights";
import Impact from "@/components/home/impact/Impact";

import PublicationsPage from "@/components/publications/PublicationsPage";

import Teaching from "@/components/home/teaching/Teaching";
import Awards from "@/components/awards/Awards";
import Contact from "@/components/contact/Contact";

export default function MainLayout() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="flex h-screen flex-col bg-slate-50">

      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="flex-1 overflow-y-auto">

        {activePage === "home" && <Hero />}

        {activePage === "about" && <About />}

        {activePage === "research" && <Research />}

        {activePage === "publications" && (
          <PublicationsPage />
        )}

        {activePage === "teaching" && (
          <Teaching />
        )}

        {activePage === "awards" && (
          <Awards />
        )}

        {activePage === "contact" && (
          <Contact />
        )}

      </main>

      <Footer />

    </div>
  );
}