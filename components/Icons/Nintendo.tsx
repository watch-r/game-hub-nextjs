import * as React from "react";

const NintendoIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            viewBox="0 0 24 24"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" // lets you control color via CSS/Tailwind
            width="1em" // scales with font-size
            height="1em"
            {...props} // allows passing className, style, etc.
        >
            <path d="M0 .6h7.1l9.85 15.9V.6H24v22.8h-7.04L7.06 7.5v15.9H0V.6"></path>{" "}
        </svg>
    );
};

export default NintendoIcon;
