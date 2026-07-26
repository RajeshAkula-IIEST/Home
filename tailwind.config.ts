import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    darkMode: "class",

    theme: {

        extend: {

            colors: {

                primary: "#0B2447",

                secondary: "#19376D",

                accent: "#F39C12",

                background: "#F7F9FC"

            },

            fontFamily: {

                heading: ["Poppins"],

                body: ["Inter"]

            }

        }

    },

    plugins: [],

};

export default config;
