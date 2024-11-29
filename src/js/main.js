import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".l-slider-container", {
  x: "-85%",
  duration: 2,
  scrollTrigger: {
    trigger: ".l-slider-mask",
    start: "bottom bottom ",
    end: "+=600%",
    scrub: 1,
    pin: true,
  },
});
