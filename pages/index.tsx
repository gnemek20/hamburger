import style from "@/styles/main.module.css"
import { Detail, Footer, Header, Introduce, Landing, Map, Merit, Request, ZipperStructure } from '@/components/index';
import { RefObject, useEffect, useRef, useState } from "react";

const main = () => {
  const [intersectingElements, setintersectingElements] = useState<Array<RefObject<HTMLDivElement>>>([]);
  const introduceRef = useRef<HTMLDivElement>(null);
  const zipperStructureRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const meritRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<HTMLDivElement>(null);

  interface componentsProps {
    elementRef: RefObject<HTMLDivElement>
    startAnimation: boolean
  }

  const components: Array<(props: componentsProps) => JSX.Element> = [
    Introduce,
    ZipperStructure,
    Detail,
    Merit,
    Map,
    Request
  ];
  const refs: Array<RefObject<HTMLDivElement>> = [
    introduceRef,
    zipperStructureRef,
    detailRef,
    meritRef,
    mapRef,
    requestRef
  ];

  const elementObserved = (observer: IntersectionObserver, elementRef: RefObject<HTMLDivElement>) => {
    if (!intersectingElements.includes(elementRef)) appendIntointersectingElements(elementRef);
    else elementRef.current && observer.unobserve(elementRef.current);
  }
  const appendIntointersectingElements = (elementRef: RefObject<HTMLDivElement>) => {
    setintersectingElements([...intersectingElements, elementRef]);
  }

  useEffect(() => {
    if (refs[refs.length - 1]) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            refs.forEach((ref) => {
              if (entry.target === ref.current) elementObserved(observer, ref);
            })
          }
        })
      }, { threshold: 0 })

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
      <Header requestComponentRef={refs[refs.length - 1]} />
      {
        components.map((Component, index) => (
          <Component elementRef={refs[index]} startAnimation={intersectingElements.includes(refs[index])} key={index} />
        ))
      }
      <Footer />
    </>
  );
}

export default main;