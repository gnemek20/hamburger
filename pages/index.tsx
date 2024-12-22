import { Footer, Header, Introduce, Landing } from '@/components/index';
import { RefObject, useRef } from "react";

const main = () => {
  const introduceRef = useRef<HTMLDivElement>(null);

  interface componentsProps {
    elementRef: RefObject<HTMLDivElement>
  }

  const components: Array<(props: componentsProps) => JSX.Element> = [
    Introduce
  ];

  const refs: Array<RefObject<HTMLDivElement>> = [
    introduceRef
  ];

  return (
    <>
      <Header />
      <Landing />
      {
        components.map((Component, index) => (
          <Component elementRef={refs[index]} key={index} />
        ))
      }
      <Footer />
    </>
  );
}

export default main;