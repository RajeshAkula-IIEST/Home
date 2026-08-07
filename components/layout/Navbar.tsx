"use client";

import { Menu, X, Download } from "lucide-react";
import { useState, useEffect } from "react";

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
  useEffect(() => {
  if (mobileOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [mobileOpen]);

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
        setMobileOpen(false);
      }}
      className={`relative w-full rounded-xl px-4 py-4 text-left transition-all duration-300 ${
        activePage === page
          ? "bg-sky-100 font-semibold text-sky-700"
          : "text-slate-600 hover:bg-sky-50 hover:text-sky-700"
      }`}
    >
      {label}

      {activePage === page && (
        <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded bg-sky-700" />
      )}
    </button>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-6">

        <button
          onClick={() => setActivePage("home")}
          className="flex items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-700 text-lg font-bold text-white">
            RA
          </div>

          <div className="hidden text-left sm:block">
            <h1 className="text-base md:text-lg font-bold text-slate-900">
              Dr. Rajesh Akula
            </h1>

            <p className="text-xs text-slate-500">
              Assistant Professor
            </p>
          </div>
        </button>

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

        <button
          className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
  <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl">
          <div className="flex flex-col gap-2 p-6">
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
              className="mt-4 rounded-xl bg-sky-700 px-5 py-4 text-center font-medium text-white transition hover:bg-sky-800"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}