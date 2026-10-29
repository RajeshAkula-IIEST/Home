
"use client";

import { Eye } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
   const getVisitorCount = async () => {
  try {
    const response = await fetch("/api/visitors", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Visitor API error: ${response.status}`);
    }

    const data = await response.json();

    if (typeof data.value !== "number") {
      throw new Error("Invalid visitor counter response");
    }

    setVisits(data.value);
  } catch (error) {
    console.error("Visitor counter error:", error);
  }
};

    getVisitorCount();
  }, []);

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex min-h-[52px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Dr. Rajesh Akula
        </p>

        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 shadow-sm">
          <Eye className="h-4 w-4 text-sky-700" />

          <span className="text-sm font-medium text-slate-500">
            Visitors
          </span>

          <span className="text-sm font-bold text-slate-900">
            {visits !== null ? visits.toLocaleString() : "—"}
          </span>
        </div>
      </div>
    </footer>
  );
}
