import Image from "next/image";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="mx-auto max-w-5xl px-5 py-8">

        {/* ===================================================== */}
        {/* TOP */}
        {/* ===================================================== */}

        <div className="grid items-center gap-4 lg:grid-cols-[1.45fr_0.55fr]">

          {/* LEFT */}

          <div>
            <h1 className="text-5xl font-black tracking-tight text-slate-900">
              Dr. Rajesh Akula
            </h1>

            <h2 className="mt-5 text-2xl font-semibold text-slate-800">
              Assistant Professor (Mechanical Engineering)
            </h2>

            <h2 className="mt-5 text-2xl font-semibold text-slate-800">
              Adjunct Assistant Professor (CCSID)
            </h2>

            <p className="mt-3 text-lg text-sky-700">
              Indian Institute of Engineering Science and Technology (IIEST),
              Shibpur
            </p>
          </div>

          {/* PHOTO */}

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/profile.jpg"
              alt="Dr. Rajesh Akula"
              width={300}
              height={380}
              priority
              className="rounded-3xl border-4 border-white object-cover shadow-xl"
            />
          </div>

        </div>

        {/* ===================================================== */}
        {/* RESEARCH QUOTE */}
        {/* ===================================================== */}

        <div className="mt-2 flex justify-center">
  <Image
    src="/quote.jpg"
    alt="Research Quote"
    width={700}
    height={260}
    priority
    className="w-full max-w-2xl rounded-2xl shadow-lg"
  />
</div>
      </div>
    </section>
  );
}