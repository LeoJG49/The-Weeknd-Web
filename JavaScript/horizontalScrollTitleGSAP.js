gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
    ScrollTrigger.create({
        trigger: ".about-wrapper",
        start: "top top",
        end: "+=900vh",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
            gsap.to(".about-wrapper",  {
                x: `${-500 * self.progress}vw`,
                duration: .5,
            })
        }
    })
});