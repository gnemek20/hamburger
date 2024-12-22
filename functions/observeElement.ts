import { RefObject } from "react";

const observeElement = (element: RefObject<HTMLDivElement>, runFunction: Function) => {
  if (element) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        runFunction();
      }
    }, { threshold: 0.15 });

    element.current && observer.observe(element.current);
  }
}

export { observeElement };