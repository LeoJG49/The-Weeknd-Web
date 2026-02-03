if (window.matchMedia('(min-width: 1200px)').matches) {
    gsap.registerPlugin(ScrollTrigger);
    let horizontal = gsap.to(".about-wrapper", {
        x: "-480vw",
        ease: "none",
        paused: true
    });
    
    ScrollTrigger.create({
        trigger: ".about-wrapper",
        start: "top top",
        end: "+=900vh",
        scrub: 1,
        pin: true,
        animation: horizontal
    });
}

if (window.matchMedia('(max-width: 1199px)').matches) {
    document.fonts.ready.then(() => {
    //About The Weeknd Text Animation
    gsap.set(".about-title", { opacity: 1});

    let split;
    SplitText.create(".about-title", {
        type: "words, lines, chars",
        wordsClass: "word",
        linesClass: "line",
        charsClass: "char",
        autoSplit: true,
        mask: "words" ,
        onSplit: (self) => {
            split = gsap.from(self.words, {
                y: 150,
                ease: "power2.out",
                stagger: .2,
            })
            return split;
        }
    })
})
}
