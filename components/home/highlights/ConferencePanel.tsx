import { conferencePublications } from "@/data/conferencePublications";
import { CalendarDays, Presentation } from "lucide-react";

export default function ConferencePanel() {
  return (
    <div className="space-y-6 mt-12">
      {conferencePublications.map((paper) => (
        <div
          key={`${paper.year}-${paper.title}`}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
        >
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              {paper.conference}
            </span>

            <span className="flex items-center gap-1 text-slate-500">
              <CalendarDays className="h-4 w-4" />
              {paper.year}
            </span>
          </div>

          <h3 className="mt-4 text-xl font-semibold text-slate-900">
            {paper.title}
          </h3>

          <p className="mt-3 text-slate-600">
            {paper.authors}
          </p>
        </div>
      ))}
    </div>
  );
}