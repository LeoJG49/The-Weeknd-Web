
import './generalAnimationsGSAP.js'
// import './horizontalScrollTitleGSAP.js'
import './aboutTextAnimationGSAP.js'
import './timelineTitleAnimationGSAP.js'
import './timelineAnimationGSAP.js'
import './timelineTextAnimationGSAP.js'
import './tourTitleAnimationGSAP.js'








//Smooth Scroll
let lenis;

if (window.matchMedia('(min-width: 1200px)').matches) {
  lenis = new Lenis({
    smoothWheel: true,
    smoothTouch: false
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}