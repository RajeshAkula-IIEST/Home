import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
  icon: React.ElementType;
  href?: string;
}

export default function PortalCard({
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <button
      className="
        group
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
        text-left
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500
        hover:bg-blue-50
        hover:shadow-lg
      "
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
        <Icon
          className="text-blue-600"
          size={22}
        />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>

      <div className="mt-5 flex items-center gap-2 text-blue-600 font-medium">
        Open

        <ArrowRight
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>
    </button>
  );
}