
import './generalAnimationsGSAP.js'
import './horizontalScrollTitleGSAP.js'
import './aboutTextAnimationGSAP.js'











//Smooth Scroll

const lenis = new Lenis()

lenis.on('scroll', () => {})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)