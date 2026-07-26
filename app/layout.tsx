import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Rajesh Akula | Assistant Professor | IIEST Shibpur",
  description:
    "Official academic website of Dr. Rajesh Akula. Research in Battery Thermal Management, Artificial Intelligence, Heat Transfer and Energy Storage.",

  keywords: [
    "Rajesh Akula",
    "IIEST",
    "Battery Thermal Management",
    "Artificial Intelligence",
    "Energy Storage",
    "Heat Transfer",
    "Mechanical Engineering",
    "Machine Learning",
    "Lithium-ion Batteries"
  ],

  authors: [
    {
      name: "Dr. Rajesh Akula",
    },
  ],

  creator: "Dr. Rajesh Akula",

  openGraph: {
    title: "Dr. Rajesh Akula",
    description:
      "Assistant Professor, Department of Mechanical Engineering, IIEST Shibpur",
    type: "website",
    locale: "en_US",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>

        {children}

      </body>
    </html>
  );
}
