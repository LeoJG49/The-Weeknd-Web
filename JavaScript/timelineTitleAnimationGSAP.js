document.fonts.ready.then(() => {
    //Discography Text Animation
    gsap.set(".timeline-title", { opacity: 1});

    let split;
    SplitText.create(".timeline-title", {
        type: "words, lines, chars",
        wordsClass: "word",
        linesClass: "line",
        charsClass: "char",
        autoSplit: true,
        mask: "words" ,
        onSplit: (self) => {
            split = gsap.from(self.words, {
                y: 150,
                scrollTrigger: {
                    trigger: ".timeline-title",
                    start: "top 90%",
                    end: "top 30%",
                    scrub: 1,
                },
                ease: "power2.out",
                stagger: .2,
            })
            //Optimazed the ScrollTrigger of the Animation
            ScrollTrigger.refresh();
            return split;
        }
    })
})