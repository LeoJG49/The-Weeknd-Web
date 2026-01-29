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
