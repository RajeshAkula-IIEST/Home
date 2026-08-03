"use client";

import {
  GraduationCap,
  BadgeCheck,
  Linkedin,
  ExternalLink,
} from "lucide-react";

const socials = [
  {
    title: "Google Scholar",
    subtitle: "Research Publications & Citations",
    url: "https://scholar.google.com/citations?user=dmDv2kMAAAAJ&hl=en",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "ORCID",
    subtitle: "Researcher Identifier",
    url: "https://orcid.org/0000-0002-3344-3073",
    icon: BadgeCheck,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "LinkedIn",
    subtitle: "Professional Profile",
    url: "https://www.linkedin.com/in/rajesh-akula",
    icon: Linkedin,
    color: "from-sky-500 to-blue-700",
  },
];

export default function SocialLinks() {
  return (
    <section className="mt-0">

      {/* Divider */}

      <div className="mx-auto mb-2 h-px w-40 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

 
      {/* Cards */}

      <div className="grid gap-8 md:grid-cols-3">

        {socials.map((item) => {

          const Icon = item.icon;

          return (

            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-gradient-to-br
                from-white
                to-slate-50
                p-8
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:scale-[1.02]
                hover:border-blue-300
                hover:shadow-2xl
              "
            >

              {/* Icon */}

              <div
                className={`
                  flex h-16 w-16 items-center justify-center
                  rounded-2xl
                  bg-gradient-to-r
                  ${item.color}
                  text-white
                  transition-transform
                  duration-300
                  group-hover:scale-110
                `}
              >
                <Icon size={32} />
              </div>

              {/* Title */}

              <h3 className="mt-7 text-[28px] font-bold text-slate-900">

                {item.title}

              </h3>

              {/* Subtitle */}

              <p className="mt-3 min-h-[56px] leading-7 text-slate-600">

                {item.subtitle}

              </p>

              {/* Button */}

              <div
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-blue-600
                  px-5
                  py-3
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  group-hover:bg-slate-900
                "
              >

                Visit Profile

                <ExternalLink
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />

              </div>

            </a>

          );

        })}

      </div>

    </section>
  );
}