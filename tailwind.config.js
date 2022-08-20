/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // colorscheme
                bb: "#0317B0", // background blue
                lb: "#5076FF", // light blue
                tlb: "#B0C1FF", // text light blue
                cb: "#1F4DF0", // calm blue
                lw: "#E5EAFF", // light white
                dib: "#4361EE", // dark ish blue
                dp: "#2A2A68", // dark purple
                dpr: "rgba(70, 71, 173, 0.3)", // dark purple
                lp: "#9576EB", // light purple
                mp: "#4647AD", // medium purple
                slp: "#A6A6F2", // super light purple
            },
            fontFamily: {
                "carter-one": ['"Carter One"', "sans-serif"],
                cabin: ['"Cabin"', "sans-serif"],
                "dm-sans": ['"DM Sans"', "sans-serif"],
                poppins: ['"Poppins"', '"sans-serif"'],
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
    variants: {
        scrollbar: ["rounded"],
    },
};

//// bg FFFEFE
// button bg + text 418CFD
// highlighted bg E9F2FF
// light gray F4F6F8
// darker gray AAADAF
