document.fonts.ready.then(() => {
    // Timeline Text Animation con Mask sin romper el layout
    
    const descriptions = document.querySelectorAll(".timeline-description");

    descriptions.forEach((description) => {
        // Obtener el span dentro de la descripción
        const span = description.querySelector("span");
        
        if (!span) return;

        // Crear una animación de máscara usando clip-path
        gsap.set(span, {
            clipPath: "inset(0% 100% 0% 0%)",
            opacity: 1
        });

        // Animar el clip-path para revelar el texto de izquierda a derecha
        gsap.to(span, {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.8,
            ease: "power2.out",
            delay: .5,
            scrollTrigger: {
                trigger: description,
                start: "top 70%",
                end: "top 60%",
                scrub: 1,
            }
        });
    });

    // Optimizar ScrollTrigger después de crear todas las animaciones
    ScrollTrigger.refresh();
});
