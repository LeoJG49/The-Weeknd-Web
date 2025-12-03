gsap.registerPlugin(SplitText)

document.fonts.ready.then(() => {
    //Logo Text Animation
    gsap.set(".title", { opacity: 1});

    let split;
    SplitText.create(".title", {
        type: "words, lines",
        wordsClass: "word",
        linesClass: "line",
        autoSplit: true,
        mask: "lines",
        onSplit: (self) => {
            split = gsap.from(self.lines, {
                y: 110,
                duration: 1,
                opacity: 0,
                ease: "power2.out",
                // repeat: -1,
                // yoyo: true,
            })
            return split;
        }
    })

    //Navigation Items Animation
    gsap.set(".nav-items", { opacity: 1});

    SplitText.create(".nav-items", {
        type: "words, lines",
        wordsClass: "word",
        linesClass: "line",
        autoSplit: true,
        mask: "lines",
        onSplit: (self) => {
            split = gsap.from(self.lines, {
                y: 110,
                duration: 1,
                stagger: .1,
                opacity: 0,
                ease: "power2.out",
                // repeat: -1,
                // yoyo: true,
            })
            return split;
        }
    })
})
