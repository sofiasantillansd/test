// import styles bundle
import { gsap } from "./node_modules/gsap/index.js";
import { ScrollTrigger } from "./node_modules/gsap/all.js";

gsap.registerPlugin(ScrollTrigger);
$(function () {

  $('[data-scrollmagic]').each(function (index, elem) {
    // Init ScrollMagic Controller
    var scrollMagicController = new ScrollMagic.Controller();

    // Create Animations
    var title = $(elem).find('h3'),
      text = $(elem).find('p'),
      btn = $(elem).find('a');

    var tl = new TimelineMax({ pause: true });
    tl.add("start") // add timeline label
      .fromTo(title, 0.4, { y: '40px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
      .fromTo(text, 0.4, { y: '60px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
      .fromTo(btn, 0.4, { y: '100px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")

    // Create the Scene and trigger when visible
    var scene = new ScrollMagic.Scene({
      triggerElement: elem,
      offset: 0 /* offset the trigger Npx below scene's top */
    })
      .setTween(tl)
      .addTo(scrollMagicController);

    // Add debug indicators fixed on right side
   
  });
});

