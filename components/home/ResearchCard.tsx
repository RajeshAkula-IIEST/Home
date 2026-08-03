import type { ElementType } from "react";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  description: string;
  icon: ElementType;
  tags: string[];
};

export default function ResearchCard({
  title,
  description,
  icon: Icon,
  tags,
}: Props) {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
        <Icon size={28} />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-slate-600">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-2 font-medium text-blue-600">
        Learn More

        <ArrowRight
          className="transition-transform duration-300 group-hover:translate-x-1"
          size={18}
        />
      </div>
    </div>
  );
}