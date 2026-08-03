"use client";

import { Menu, X, Download } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Research", page: "research" },
  { label: "Publications", page: "publications" },
  { label: "Teaching", page: "teaching" },
  { label: "Awards", page: "awards" },
  { label: "Contact", page: "contact" },
];

export default function Navbar() {
  const [activePage, setActivePage] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);


  const NavButton = ({
    label,
    page,
  }: {
    label: string;
    page: string;
  }) => (
    <button
      onClick={() => {
  setActivePage(page);

  document.getElementById(page)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  setMobileOpen(false);
}}
      className={`relative transition-all duration-300 ${
        activePage === page
          ? "text-sky-700 font-semibold"
          : "text-slate-600 hover:text-sky-700"
      }`}
    >
      {label}

      {activePage === page && (
        <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded bg-sky-700" />
      )}
    </button>
  );

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <button
          onClick={() => {
  setActivePage("home");

  document.getElementById("home")?.scrollIntoView({
    behavior: "smooth",
  });
}}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-700 text-lg font-bold text-white">
            RA
          </div>

          <div className="hidden sm:block text-left">
            <h1 className="text-lg font-bold text-slate-900">
              Dr. Rajesh Akula
            </h1>

            <p className="text-xs text-slate-500">
              Assistant Professor
            </p>
          </div>
        </button>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((item) => (
            <NavButton
              key={item.page}
              {...item}
            />
          ))}

          <a
            href="/Rajesh_Akula_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-sky-700 px-5 py-2 font-medium text-white transition hover:bg-sky-800"
          >
            <Download size={18} />
            CV
          </a>
        </nav>

        {/* Mobile */}

        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="flex flex-col p-6 space-y-4">
            {links.map((item) => (
              <NavButton
                key={item.page}
                {...item}
              />
            ))}

            <a
              href="/Rajesh_Akula_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-xl bg-sky-700 px-4 py-3 text-center text-white"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}