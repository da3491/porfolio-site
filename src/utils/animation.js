import anime from "animejs/lib/anime.es.js";

anime({
  targets: ".fadein-anime",
  opacity: [0, 1],
  duration: 2000,
  delay: anime.stagger(250, { start: 500 }),
  easing: "cubicBezier(0.015, 0.125, 0.195, 0.960)",
});

anime({
  targets: ".fadein-anime",
  translateY: [100, 0],
  duration: 2000,
  easing: "cubicBezier(0.015, 0.125, 0.195, 0.960)",
});
