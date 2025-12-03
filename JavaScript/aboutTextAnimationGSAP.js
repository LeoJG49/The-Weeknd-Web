document.fonts.ready.then(() => {
    //Info Text Animation
    gsap.set(".info", { opacity: 1});

    let split;
    SplitText.create(".info", {
        type: "words, lines, chars",
        wordsClass: "word",
        linesClass: "line",
        charsClass: "char",
        autoSplit: true,
        onSplit: (self) => {
            split = gsap.from(self.chars, {
                scrollTrigger: {
                    trigger: ".info",
                    start: "top 60%",
                    end: "top 20%",
                    scrub: 1,
                },
                ease: "none",
                opacity: .2,
                stagger: .2,
            })
            return split;
        }
    })
})