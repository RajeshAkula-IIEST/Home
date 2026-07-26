"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {

    const [dark, setDark] = useState(false);

    useEffect(() => {

        const saved = localStorage.getItem("theme");

        if (saved === "dark") {

            document.documentElement.classList.add("dark");

            setDark(true);

        }

    }, []);

    function toggle() {

        const html = document.documentElement;

        if (dark) {

            html.classList.remove("dark");

            localStorage.setItem("theme", "light");

        } else {

            html.classList.add("dark");

            localStorage.setItem("theme", "dark");

        }

        setDark(!dark);

    }

    return (

        <button

            onClick={toggle}

            className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition"

        >

            {dark ? <Sun size={20} /> : <Moon size={20} />}

        </button>

    );

}
