import * as React from "react";

const IosIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
            <path
                d="M16 3H8M16 3C17.6569 3 19 4.34315 19 6V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V6C5 4.34315 6.34315 3 8 3M16 3H15.8889C14.9684 3 14.2222 3.74619 14.2222 4.66667C14.2222 4.85076 14.073 5 13.8889 5H10.1111C9.92702 5 9.77778 4.85076 9.77778 4.66667C9.77778 3.74619 9.03159 3 8.11111 3H8"
                stroke="#000000"
                strokeWidth="2"
            ></path>
        </svg>
    );
};

export default IosIcon;
