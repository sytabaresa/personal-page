import { SVGProps } from "react";

export const Cross = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg viewBox="0 0 41 41" className={`fill-current w-8 h-8 ${props.className}`} {...props}>
            <path d="M0.649902 20.5L40.128 20.5" stroke="#FFCC00" strokeWidth="6.93777" />
            <path d="M20.3889 40.239L20.3889 0.760881" stroke="#FFCC00" strokeWidth="6.93777" />
        </svg>
    );
}