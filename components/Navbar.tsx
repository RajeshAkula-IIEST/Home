"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const menus = [
  "Home",
  "About",
  "Research",
  "Publications",
  "Teaching",
  "Projects",
  "Patents",
  "Gallery",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      <nav className="backdrop-blur-xl bg-white/85 shadow-md">

        <div className="container-custom flex justify-between items-center h-20">

          <Link
            href="/"
            className="text-2xl font-bold text-primary"
          >
            RA
          </Link>

          <div className="hidden lg:flex gap-8">

            {menus.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-medium hover:text-accent transition"
              >
                {item}
              </a>
            ))}

          </div>

          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

        {open && (
          <div className="lg:hidden bg-white">

            {menus.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block p-5 border-b"
              >
                {item}
              </a>
            ))}

          </div>
        )}

      </nav>

    </header>
  );
}
