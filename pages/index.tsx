import style from "@/styles/main.module.css"
import { Introduce, Landing, Product } from '@/components/index';
import { RefObject, useEffect, useRef, useState } from "react";

const main = () => {
  const [intersectingElements, setintersectingElements] = useState<Array<RefObject<HTMLDivElement>>>([]);
  const introduceRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);

  const elementObserved = (observer: IntersectionObserver, elementRef: RefObject<HTMLDivElement>) => {
    if (!intersectingElements.includes(elementRef)) appendIntointersectingElements(elementRef);
    else elementRef.current && observer.unobserve(elementRef.current);
  }
  const appendIntointersectingElements = (elementRef: RefObject<HTMLDivElement>) => {
    setintersectingElements([...intersectingElements, elementRef]);
  }

  useEffect(() => {
    if (introduceRef || productRef) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === introduceRef.current) elementObserved(observer, introduceRef);
            else if (entry.target === productRef.current) elementObserved(observer, productRef);
          }
        })
      }, { threshold: 0.5 })

      if (introduceRef.current) observer.observe(introduceRef.current);
      if (productRef.current) observer.observe(productRef.current);

      return() => {
        observer.disconnect();
      }
    }
  }, [intersectingElements])

  return (
    <>
      <Landing />
      <Introduce elementRef={introduceRef} startAnimation={intersectingElements.includes(introduceRef)} />
      <Product elementRef={productRef} startAnimation={intersectingElements.includes(productRef)} />
    </>
  );
}

export default main;