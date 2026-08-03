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
        akula.mech@faculty.iiests.ac.in
        <br />
        akula@mech.iiests.ac.in
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
        M.E. 205
        <br />
        Department of Mechanical Engineering
        <br />
        IIEST, Shibpur, India – 711103
      </>
    ),
    href: "",
    icon: Building2,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Google Scholar",
    value: "Research Publications & Citations",
    href: "https://scholar.google.com/citations?user=dmDv2kMAAAAJ&hl=en",
    icon: GraduationCap,
    color: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
  },
  {
    title: "ORCID",
    value: "Researcher Identifier",
    href: "https://orcid.org/0000-0002-3344-3073",
    icon: BadgeCheck,
    color: "bg-gradient-to-r from-emerald-500 to-green-600 text-white",
  },
  {
    title: "LinkedIn",
    value: "Professional Profile",
    href: "https://www.linkedin.com/in/rajesh-akula",
    icon: Linkedin,
    color: "bg-gradient-to-r from-sky-500 to-blue-700 text-white",
  },
];
export default function Contact() {

  return (

    <Section id="contact">

      <div className="mx-auto max-w-5xl">

        <div className="text-center">



          <h1 className="mt-2 text-4xl font-extrabold text-slate-900">

            Let's Connect

          </h1>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500"/>

        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-xl leading-9 text-slate-600">

          I welcome collaborations, research discussions, student
          interactions, and academic partnerships in
          <strong className="text-slate-900">
            {" "}Battery Technology
          </strong>,
          <strong className="text-slate-900">
            {" "}Thermal Management
          </strong>,
          <strong className="text-slate-900">
            {" "}Energy Storage Systems
          </strong>
          {" "}and
          <strong className="text-slate-900">
            {" "}Artificial Intelligence.
          </strong>

        </p>

      </div>

      <div className="contact-scroll mt-16">

        <div className="contact-track">

          {[...cards, ...cards].map((card, index) => {

            const Icon = card.icon;

            return (

              <div
                key={index}
                className="
                min-w-[240px]
                h-[280px]
                rounded-3xl
                border
                border-slate-200
                bg-gradient-to-br
                from-white
                to-slate-50
                p-4
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
                hover:border-blue-400
                "
              >

                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${card.color}`}>

                  <Icon size={20}/>

                </div>

                <h2 className="mt-6 text-2xl font-bold">

                  {card.title}

                </h2>

                <div className="mt-5 text-lg leading-8 text-slate-600">

                  {card.href ? (

                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600"
                    >

                      {card.value}

                    </a>

                  ) : (

                    card.value

                  )}

                </div>

                {card.href.startsWith("http") && (

                  <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-white">

                    Visit Profile

                    <ExternalLink size={18}/>

                  </div>

                )}

              </div>

            );

          })}

        </div>

      </div>

    </Section>

  );

}