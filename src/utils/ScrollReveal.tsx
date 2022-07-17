import React, { useRef, useEffect, FC } from "react";
import scrollReveal from "scrollreveal";

interface ScrollRevealProps {
    children?: JSX.Element;
    delay?: number;
}

const ScrollReveal: FC<ScrollRevealProps> = ({ children, delay }) => {
    const sectionRef = useRef<HTMLElement>(null);
    useEffect(() => {
        if (sectionRef.current)
            scrollReveal().reveal(sectionRef.current, {
                reset: false,
                delay: delay ?? 500
            });
    }, [delay]);

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
