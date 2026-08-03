import { Award } from "lucide-react";

export default function PatentPanel() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-12 shadow-sm">
      <div className="flex items-center gap-3">
        <Award className="h-8 w-8 text-amber-500" />

        <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
          Granted Patent
        </span>
      </div>

      <h2 className="mt-8 text-3xl font-bold leading-tight">
        SMART THERMAL MANAGEMENT SYSTEM FOR
        <br />
        LITHIUM-ION BATTERY MODULES
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div>
          <p className="text-sm text-slate-500">Application No.</p>
          <p className="font-semibold">202521082797</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Filed</p>
          <p className="font-semibold">2025</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Status</p>
          <p className="font-semibold text-green-600">
            Granted
          </p>
        </div>
      </div>

      <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-600">
        This invention proposes an intelligent thermal management
        system for lithium-ion battery modules to improve thermal
        uniformity, enhance safety, and increase battery performance.
      </p>
    </div>
  );
}