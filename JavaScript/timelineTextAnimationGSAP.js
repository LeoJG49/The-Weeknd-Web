document.fonts.ready.then(() => {
    // Timeline Text Animation
    
    const descriptions = document.querySelectorAll(".timeline-description");

    descriptions.forEach((description) => {
        const span = description.querySelector("span");
        
        if (!span) return;

        // Animated mask with clipPath - Start with text hidden from top
        gsap.set(span, {
            clipPath: "inset(0% 0% 100% 0%)",
            opacity: 1
        });

        // Animated clipPath from up to bottom
        gsap.to(span, {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: description,
                start: "top 70%",
                end: "top 30%",
                scrub: 1,
            }
        });
    });
    ScrollTrigger.refresh();
});
