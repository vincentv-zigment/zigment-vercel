import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function hasPinContent(
  element: HTMLElement,
  area: string | HTMLElement,
  start?: string,
  dWidth: number = 991
) {
  const device_width = window.innerWidth;
  const startFrom = start || "top top";

  if (element && device_width > dWidth) {
    return gsap.to(element, {
      scrollTrigger: {
        trigger: area,
        pin: element,
        start: startFrom,
        end: "bottom bottom",
        pinSpacing: false,
      },
    });
  }
}
