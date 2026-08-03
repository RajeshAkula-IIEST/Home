import Link from "next/link";
import {
  Github,
  Linkedin,
  GraduationCap,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Dr. Rajesh Akula
        </p>

        <div className="flex items-center gap-5">

          <Link href="mailto:rajesh.akula@iiests.ac.in">
            <Mail className="h-5 w-5 hover:text-sky-700" />
          </Link>

          <Link href="#">
            <GraduationCap className="h-5 w-5 hover:text-sky-700" />
          </Link>

          <Link href="#">
            <Linkedin className="h-5 w-5 hover:text-sky-700" />
          </Link>

          <Link href="#">
            <Github className="h-5 w-5 hover:text-sky-700" />
          </Link>

        </div>

      </div>
    </footer>
  );
}