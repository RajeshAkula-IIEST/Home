type Props = {
  title: string;
  subtitle: string;
  description: string;
  year: string;
  icon: React.ElementType;
};

export default function AwardCard({
  title,
  subtitle,
  description,
  year,
  icon: Icon,
}: Props) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <Icon className="h-10 w-10 text-sky-600" />

        <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">
          {year}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 font-medium text-slate-600">
        {subtitle}
      </p>

      <p className="mt-5 leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}