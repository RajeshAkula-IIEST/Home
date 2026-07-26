"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollTop() {

    const [show, setShow] = useState(false);

    useEffect(() => {

        function scroll() {

            setShow(window.scrollY > 500);

        }

        window.addEventListener("scroll", scroll);

        return () => window.removeEventListener("scroll", scroll);

    }, []);

    if (!show) return null;

    return (

        <button

            onClick={() =>

                window.scrollTo({

                    top: 0,

                    behavior: "smooth",

                })

            }

            className="fixed bottom-8 right-8 bg-primary text-white rounded-full p-4 shadow-lg"

        >

            <ArrowUp />

        </button>

    );

}
