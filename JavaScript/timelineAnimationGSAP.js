gsap.registerPlugin(ScrollTrigger);

const timelineSection = document.querySelectorAll(".checkpoint")

timelineSection.forEach((section, index) => {
    gsap.from(section, {
        y: 15,
        opacity: 0,
        delay: index * 0.1,
        scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "top 10%",
            scrub: 1,
            stagger: 0.1
        }
    })
    ScrollTrigger.refresh();
})