"use client";

import { X } from "lucide-react";

type Props = {
  open: boolean;
  title: string;
  subtitle?: string;
  file: string;
  onClose: () => void;
};

export default function DocumentViewer({
  open,
  title,
  subtitle,
  file,
  onClose,
}: Props) {

  if (!open) return null;

  return (

    <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm">

      <div className="absolute inset-6 rounded-3xl bg-white shadow-2xl overflow-hidden">

        {/* Header */}

        <div className="flex items-center justify-between border-b px-8 py-5">

          <button
            onClick={onClose}
            className="flex items-center gap-2 rounded-xl border px-4 py-2 transition hover:bg-slate-100"
          >
            <X size={18}/>
            Close
          </button>

          <div className="text-center">

            <h2 className="text-3xl font-bold">
              {title}
            </h2>

            {subtitle && (
              <p className="text-slate-500">
                {subtitle}
              </p>
            )}

          </div>

          <div className="w-24"/>
        </div>

        {/* Viewer */}

        <iframe
          src={file}
          className="h-[calc(100vh-130px)] w-full"
        />

      </div>

    </div>

  );
}