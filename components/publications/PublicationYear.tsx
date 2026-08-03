import PublicationItem from "./PublicationItem";

type Publication = {
  year: number;
  title: string;
  journal: string;
  authors: string;
  doi: string;
};

type Props = {
  year: number;
  papers: Publication[];
};

export default function PublicationYear({
  year,
  papers,
}: Props) {
  return (
    <section className="mb-14">
      <div className="mb-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-200" />

        <span className="rounded-full bg-blue-600 px-5 py-2 text-white font-semibold">
          {year}
        </span>

        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="space-y-6">
        {papers.map((paper) => (
          <PublicationItem
            key={paper.title}
            {...paper}
          />
        ))}
      </div>
    </section>
  );
}