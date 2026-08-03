import { LucideIcon } from "lucide-react";

type ImpactCardProps = {
  icon: LucideIcon;
  value: string;
  label: string;
};

export default function ImpactCard({
  icon: Icon,
  value,
  label,
}: ImpactCardProps) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 inline-flex rounded-2xl bg-blue-50 p-4 transition-colors duration-300 group-hover:bg-blue-100">
        <Icon className="h-8 w-8 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
      </div>

      <h3 className="text-4xl font-bold tracking-tight text-slate-900">
        {value}
      </h3>

      <p className="mt-3 text-base font-medium text-slate-600">
        {label}
      </p>
    </div>
  );
}