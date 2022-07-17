import React, { useRef, useEffect, FC } from "react";
import scrollReveal from "scrollreveal";

interface ScrollRevealProps {
    children?: JSX.Element;
}

const ScrollReveal: FC<ScrollRevealProps> = ({ children }) => {
    const sectionRef = useRef<HTMLElement>(null);
    useEffect(() => {
        if (sectionRef.current)
            scrollReveal().reveal(sectionRef.current, {
                reset: false,
                delay: 500
            });
    }, []);

    return (
        <section
            ref={sectionRef}
            className="scroll-section"
        >
            {children}
        </section>
    );
};

export default ScrollReveal;
