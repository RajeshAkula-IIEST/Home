"use client";

import Section from "@/components/ui/Section";

import {
  User,
  Mail,
  Building2,
  GraduationCap,
  BadgeCheck,
  Linkedin,
  ExternalLink,
} from "lucide-react";

const cards = [
  {
    title: "Personal Email",
    value: "rajesh95.akula@gmail.com",
    href: "mailto:rajesh95.akula@gmail.com",
    icon: User,
    color: "bg-blue-100 text-blue-700",
  },

  {
    title: "Official Email",
    value: (
      <>
        <div>akula.mech@faculty.iiests.ac.in</div>
        <div>akula@mech.iiests.ac.in</div>
      </>
    ),
    href: "mailto:akula.mech@faculty.iiests.ac.in",
    icon: Mail,
    color: "bg-blue-100 text-blue-700",
  },

  {
    title: "Office",
    value: (
      <>
        <div>M.E. 205</div>
        <div>Department of Mechanical Engineering</div>
        <div>IIEST, Shibpur, India – 711103</div>
      </>
    ),
    href: "",
    icon: Building2,
    color: "bg-blue-100 text-blue-700",
  },

  {
    title: "Google Scholar",
    value: "Research Publications & Citations",
    href:
      "https://scholar.google.com/citations?user=dmDv2kMAAAAJ&hl=en",
    icon: GraduationCap,
    color:
      "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
  },

  {
    title: "ORCID",
    value: "Researcher Identifier",
    href: "https://orcid.org/0000-0002-3344-3073",
    icon: BadgeCheck,
    color:
      "bg-gradient-to-r from-emerald-500 to-green-600 text-white",
  },

  {
    title: "LinkedIn",
    value: "Professional Profile",
    href: "https://www.linkedin.com/in/rajesh-akula",
    icon: Linkedin,
    color:
      "bg-gradient-to-r from-sky-500 to-blue-700 text-white",
  },
];

export default function Contact() {
  return (
    <Section id="contact">

      <div className="mx-auto w-full max-w-5xl">

        {/* ===================================================== */}
        {/* HEADING */}
        {/* ===================================================== */}

        <div className="text-center">

          <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Let's Connect
          </h1>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 sm:mt-5 sm:w-24" />

        </div>

        {/* ===================================================== */}
        {/* INTRODUCTION */}
        {/* ===================================================== */}

        <p className="mx-auto mt-6 max-w-4xl text-center text-base leading-7 text-slate-600 sm:mt-8 sm:text-xl sm:leading-9">

          I welcome collaborations, research discussions, student
          interactions, and academic partnerships in{" "}

          <strong className="text-slate-900">
            Battery Technology
          </strong>
          ,{" "}

          <strong className="text-slate-900">
            Thermal Management
          </strong>
          ,{" "}

          <strong className="text-slate-900">
            Energy Storage Systems
          </strong>{" "}

          and{" "}

          <strong className="text-slate-900">
            Artificial Intelligence.
          </strong>

        </p>

      </div>

      {/* ===================================================== */}
      {/* CONTACT CARDS */}
      {/* ===================================================== */}

      <div className="mt-8 w-full sm:mt-12 lg:mt-16">

        {/* MOBILE / TABLET */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">

          {cards.map((card, index) => {
            const Icon = card.icon;
            const isExternal = card.href.startsWith("http");

            return (
              <ContactCard
                key={index}
                card={card}
                Icon={Icon}
                isExternal={isExternal}
              />
            );
          })}

        </div>

        {/* DESKTOP */}

        <div className="contact-scroll hidden lg:block overflow-hidden">

          <div className="contact-track">

            {[...cards, ...cards].map((card, index) => {
              const Icon = card.icon;
              const isExternal = card.href.startsWith("http");

              return (
                <ContactCard
                  key={index}
                  card={card}
                  Icon={Icon}
                  isExternal={isExternal}
                />
              );
            })}

          </div>

        </div>

      </div>

    </Section>
  );
}


/* =============================================================
   CONTACT CARD
============================================================= */

function ContactCard({
  card,
  Icon,
  isExternal,
}: {
  card: (typeof cards)[0];
  Icon: React.ElementType;
  isExternal: boolean;
}) {
  return (
    <div
      className="
        w-full
        min-w-0
        rounded-3xl
        border
        border-slate-200
        bg-gradient-to-br
        from-white
        to-slate-50
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:border-blue-400
        hover:shadow-xl
        sm:p-6
        lg:w-[240px]
        lg:min-w-[240px]
        lg:p-4
      "
    >

      {/* Icon */}

      <div
        className={`
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          sm:h-14
          sm:w-14
          lg:h-16
          lg:w-16
          ${card.color}
        `}
      >
        <Icon size={20} />
      </div>

      {/* Title */}

      <h2 className="mt-4 text-xl font-bold text-slate-900 sm:mt-5 sm:text-2xl lg:mt-6">
        {card.title}
      </h2>

      {/* Content */}

      <div
        className="
          mt-3
          break-words
          text-base
          leading-7
          text-slate-600
          sm:mt-4
          sm:text-lg
          sm:leading-8
        "
      >

        {card.href ? (

          <a
            href={card.href}
            {...(isExternal
              ? {
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {})}
            className="break-words transition hover:text-blue-600"
          >
            {card.value}
          </a>

        ) : (

          card.value

        )}

      </div>

      {/* External profile button */}

      {isExternal && (

        <a
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-5
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-blue-600
            px-4
            py-2.5
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-blue-700
            active:bg-blue-800
            sm:mt-6
          "
        >
          Visit Profile
          <ExternalLink size={16} />
        </a>

      )}

    </div>
  );
}