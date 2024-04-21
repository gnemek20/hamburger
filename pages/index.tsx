import style from "@/styles/main.module.css"
import { Introduce, Landing, Merit, Product } from '@/components/index';
import { RefObject, useEffect, useRef, useState } from "react";

const main = () => {
  const [intersectingElements, setintersectingElements] = useState<Array<RefObject<HTMLDivElement>>>([]);
  const introduceRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const meritRef = useRef<HTMLDivElement>(null);

  interface componentsProps {
    elementRef: RefObject<HTMLDivElement>
    startAnimation: boolean
  }

  const components: Array<(props: componentsProps) => JSX.Element> = [
    Introduce,
    Product,
    Merit
  ];
  const refs: Array<RefObject<HTMLDivElement>> = [
    introduceRef,
    productRef,
    meritRef
  ];

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
            refs.forEach((ref) => {
              if (entry.target === ref.current) elementObserved(observer, ref);
            })
          }
        })
      }, { threshold: 0.3 })

      refs.forEach((ref) => {
        ref.current && observer.observe(ref.current);
      })

      return() => {
        observer.disconnect();
      }
    }
  }, [intersectingElements])

  return (
    <>
      <Landing />
      {
        components.map((Component, index) => (
          <Component elementRef={refs[index]} startAnimation={intersectingElements.includes(refs[index])} />
        ))
      }
    </>
  );
}

export default main;