import style from "@/styles/main.module.css"
import { Introduce, Landing } from '@/components/index';
import { RefObject, useEffect, useRef, useState } from "react";

const main = () => {
  const [intersectingElement, setIntersectingElement] = useState<Array<RefObject<HTMLDivElement>>>([]);
  const introduceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (introduceRef) {
      const observer = new IntersectionObserver(([event]) => {
        if (event.isIntersecting) {
          if (!intersectingElement.includes(introduceRef)) setIntersectingElement([...intersectingElement, introduceRef]);
          else introduceRef.current && observer.unobserve(introduceRef.current);
        }
      }, { threshold: 0.5 })

      if (introduceRef.current) observer.observe(introduceRef.current);
    }
  }, [introduceRef])

  return (
    <>
      <Landing />
      <Introduce elementRef={introduceRef} startAnimation={intersectingElement.includes(introduceRef)} />
    </>
  );
}

export default main;