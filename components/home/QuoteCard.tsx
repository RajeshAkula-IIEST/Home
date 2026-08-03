import { Quote } from "lucide-react";

export default function QuoteCard() {
  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-8">

      <Quote
        className="mb-4 text-blue-600"
        size={30}
      />

      <p className="text-lg italic leading-8 text-slate-700">
        Advancing safer, smarter, and more sustainable battery
        technologies through experiments, physics-based modelling,
        and artificial intelligence.
      </p>

      <p className="mt-5 font-semibold text-slate-900">
        — Dr. Rajesh Akula
      </p>

    </div>
  );
}