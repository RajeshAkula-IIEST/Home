"use client";

import { useEffect, useState } from "react";

const words = [

    "Battery Thermal Management",

    "Artificial Intelligence",

    "Machine Learning",

    "Energy Storage",

    "Heat Transfer"

];

export default function Typewriter() {

    const [index, setIndex] = useState(0);

    useEffect(() => {

        const timer = setInterval(() => {

            setIndex((i) => (i + 1) % words.length);

        }, 2500);

        return () => clearInterval(timer);

    }, []);

    return (

        <h3 className="text-3xl font-semibold text-accent">

            {words[index]}

        </h3>

    );

}
