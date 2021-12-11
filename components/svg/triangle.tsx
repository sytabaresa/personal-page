import React, { SVGProps } from "react";

export const Triangle = ({ className }: SVGProps<SVGSVGElement>) => {
    return (
        <svg viewBox="0 0 230 230" className={`${className}`}>
            <polygon points="10,10 110,183 210,10" style={{ fill: "none", stroke: "#FFCC00", strokeWidth: "8" }} />
        </svg>

    );
}