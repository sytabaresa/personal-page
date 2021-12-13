import React, { SVGProps } from "react";


interface TriagleProps extends SVGProps<SVGSVGElement> {
    
}
export const Triangle =  (props: TriagleProps) => {
    return (
        <svg viewBox="0 0 230 230" className={`${props.className}`} {...props}>
            <polygon points="10,10 110,183 210,10" style={{fill: 'none' }} />
        </svg>

    );
}