"use client";

import { Menu, X, Download } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
};

const links = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Research", page: "research" },
  { label: "Publications", page: "publications" },
  { label: "Teaching", page: "teaching" },
  { label: "Awards", page: "awards" },
  { label: "Contact", page: "contact" },
];

export default function Navbar({
  activePage,
  setActivePage,
}: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Prevent the main page from scrolling when mobile menu is open */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavigation = (page: string) => {
    setActivePage(page);
    setMobileOpen(false);
  };

  return (
    <>
      {/* ===================================================== */}
      {/* NAVBAR */}
      {/* ===================================================== */}

      <header className="sticky top-0 z-[100] border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">

          {/* ================================================= */}
          {/* LOGO */}
          {/* ================================================= */}

          <button
            type="button"
            onClick={() => handleNavigation("home")}
            className="flex min-w-0 items-center gap-3"
            aria-label="Go to Home"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-700 text-lg font-bold text-white">
              RA
            </div>

            <div className="hidden text-left sm:block">
              <h1 className="text-base font-bold text-slate-900 md:text-lg">
                Dr. Rajesh Akula
              </h1>

              <p className="text-xs text-slate-500">
                Assistant Professor
              </p>
            </div>
          </button>

          {/* ================================================= */}
          {/* DESKTOP NAVIGATION */}
          {/* ================================================= */}

          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {links.map((item) => (
              <button
                key={item.page}
                type="button"
                onClick={() => handleNavigation(item.page)}
                className={`relative px-2 py-3 text-base transition-all duration-300 ${
                  activePage === item.page
                    ? "font-semibold text-sky-700"
                    : "text-slate-600 hover:text-sky-700"
                }`}
              >
                {item.label}

                {activePage === item.page && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-sky-700" />
                )}
              </button>
            ))}

            {/* Desktop CV */}

            <a
              href="/Rajesh_Akula_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sky-700 px-5 py-2.5 font-medium text-white transition hover:bg-sky-800"
            >
              <Download size={18} />
              CV
            </a>
          </nav>

          {/* ================================================= */}
          {/* MOBILE MENU BUTTON */}
          {/* ================================================= */}

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((previous) => !previous)}
            className="flex h-12 w-12 items-center justify-center rounded-xl text-slate-700 transition hover:bg-slate-100 active:bg-slate-200 lg:hidden"
          >
            {mobileOpen ? (
              <X size={30} strokeWidth={2} />
            ) : (
              <Menu size={30} strokeWidth={2} />
            )}
          </button>
        </div>
      </header>

      {/* ===================================================== */}
      {/* MOBILE MENU */}
      {/* ===================================================== */}

      {/* ===================================================== */}
{/* MOBILE MENU */}
{/* ===================================================== */}

{mobileOpen && (
  <>
    {/* Dark transparent backdrop */}

    <button
      type="button"
      aria-label="Close mobile menu"
      onClick={() => setMobileOpen(false)}
      className="fixed inset-0 z-[90] bg-slate-900/20 lg:hidden"
    />

    {/* Mobile navigation panel */}

    <div className="fixed left-0 right-0 top-[76px] z-[95] max-h-[calc(100vh-76px)] overflow-y-auto border-t border-slate-200 bg-white shadow-xl lg:hidden">

      <div className="mx-auto max-w-7xl px-5 py-4 sm:px-6">

        {/* Navigation links */}

        <nav className="flex flex-col items-start">

          {links.map((item) => (
            <button
              key={item.page}
              type="button"
              onClick={() => handleNavigation(item.page)}
              className={`inline-flex w-fit min-w-[120px] items-center rounded-xl px-4 py-3 text-left text-base transition ${
  activePage === item.page
    ? "bg-sky-100 font-semibold text-sky-700"
    : "text-slate-700 hover:bg-sky-50 hover:text-sky-700"
}`}
            >
              <span className="flex items-center gap-3">
                {activePage === item.page && (
                  <span className="h-2 w-2 rounded-full bg-sky-700" />
                )}

                <span>{item.label}</span>
              </span>
            </button>
          ))}

        </nav>

        {/* Mobile CV */}

        <div className="mt-3 border-t border-slate-100 pt-3">

          <a
            href="/Rajesh_Akula_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center gap-2 rounded-full border border-sky-700 px-5 py-2.5 text-sm font-semibold text-sky-700 transition hover:bg-sky-50 active:bg-sky-100"
          >
            <Download size={17} />
            Download CV
          </a>

        </div>

      </div>
    </div>
  </>
)}
    </>
  );
}