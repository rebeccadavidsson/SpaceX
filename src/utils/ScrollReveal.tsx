import React, { useRef, useEffect, FC } from "react";
import scrollReveal from "scrollreveal";
import useWindowSize, { Size } from './windowSize';

interface ScrollRevealProps {
    children?: JSX.Element;
    delay?: number;
}

const ScrollReveal: FC<ScrollRevealProps> = ({children, delay}) => {
    const sectionRef = useRef<HTMLElement>(null);
    const size: Size = useWindowSize();
    useEffect(() => {
        if (sectionRef.current)
            scrollReveal().reveal(sectionRef.current, {
                reset: false,
                delay: delay ?? 500
            });
    }, [delay]);

    if (size?.width !== undefined && size?.width > 640) {
        return (
            <section
                ref={sectionRef}
                className="scroll-section"
            >
                {children}
            </section>
        );
    }

    return (
        <>
            {children}
        </>
    );
};

export default ScrollReveal;
