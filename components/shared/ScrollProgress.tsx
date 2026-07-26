"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {

    const [progress, setProgress] = useState(0);

    useEffect(() => {

        function update() {

            const total =

                document.documentElement.scrollHeight -

                document.documentElement.clientHeight;

            setProgress((window.scrollY / total) * 100);

        }

        window.addEventListener("scroll", update);

        update();

        return () => window.removeEventListener("scroll", update);

    }, []);

    return (

        <div

            className="fixed top-0 left-0 h-1 bg-accent z-[100]"

            style={{ width: `${progress}%` }}

        />

    );

}
