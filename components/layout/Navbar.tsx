"use client";

import { Menu, X, Download } from "lucide-react";
import { useState } from "react";

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
      className={`relative transition-all duration-300 ${
        activePage === page
          ? "font-semibold text-sky-700"
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

        <button
          onClick={() => setActivePage("home")}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-700 text-lg font-bold text-white">
            RA
          </div>

          <div className="hidden text-left sm:block">
            <h1 className="text-lg font-bold text-slate-900">
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
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="flex flex-col space-y-4 p-6">
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