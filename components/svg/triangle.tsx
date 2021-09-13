import React, { SVGProps } from "react";

export const Triangle = ({ className }: SVGProps<SVGSVGElement>) => {
    return (
        <svg viewBox="0 0 177 205" className={`${className}`}>
            <path d="M6.1615 10.4574L164.776 102.033L6.16149 193.609L6.1615 10.4574Z" stroke="#FFCC00" strokeWidth="12" />
        </svg>

    );
}