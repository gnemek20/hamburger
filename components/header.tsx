import style from '@/styles/components/header/header.module.css'
import animation from '@/styles/components/header/animation.module.css'
import { RefObject, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

interface headerProps {
  requestComponentRef: RefObject<HTMLDivElement>
}

const header = (props: headerProps) => {
  const router = useRouter();
  const headerRef = useRef<HTMLDivElement>(null);

  const moveToRequestComponent = () => {
    const requestComponent = props.requestComponentRef.current;
    const headerOffset = 100;
    const componentPosition = requestComponent ? requestComponent.getBoundingClientRect().top : 0;
    const offsetPosition = componentPosition + window.scrollY - headerOffset;

    window.scrollTo({
      behavior: 'smooth',
      top: offsetPosition
    });
  }

  const pageReload = () => {
    router.reload();
  }

  const checkHeaderTop = () => {
    const headerTop = headerRef.current?.getBoundingClientRect().top;

    if (headerTop !== 0) {
      headerRef.current?.classList.remove(animation.headerFadeOut);
      headerRef.current?.classList.add(animation.headerFadeIn);
    }
    else {
      hideHeader();
    }
  }

  const hideHeader = () => {
    const headerPos = headerRef.current?.getBoundingClientRect().top;

    if (headerPos === 0) {
      headerRef.current?.classList.remove(animation.headerFadeIn);
      headerRef.current?.classList.add(animation.headerFadeOut);
    }
  }

  const showHeader = () => {
    const headerPos = headerRef.current?.getBoundingClientRect().top;

    if (headerPos === 0) {
      headerRef.current?.classList.remove(animation.headerFadeOut);
      headerRef.current?.classList.add(animation.headerFadeIn);
    }
  }

  const dummy = () => {
    headerRef.current?.setAttribute('style', 'background-color: green');
  }
  const dummy1 = () => {
    headerRef.current?.setAttribute('style', 'background-color: red');
  }

  const timer = (func: Function, delay: number) => {
    let throttleTimer: NodeJS.Timeout | null;
    let debounceTimer: NodeJS.Timeout | null;
    
    return () => {
      clearTimeout(debounceTimer as NodeJS.Timeout);

      // if (!throttleTimer) {
      //   throttleTimer = setTimeout(() => {
      //     throttleTimer = null;
      //     checkHeaderTop();
      //   }, delay)
      // }

      // if (!debounceTimer) hideHeader();
      if (!debounceTimer) dummy1();

      debounceTimer = setTimeout(() => {
        debounceTimer = null;
        // func.apply(this);
        dummy();
      }, delay)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', timer(showHeader, 500));

    return() => {
      window.removeEventListener('scroll', timer(showHeader, 500));
    }
  }, [])

  return (
    <div ref={headerRef} className={`flex justifyCenter ${style.header}`}>
      <div className={`limitWidth maxWidth flex spaceBetween`}>
        <div className={`${style.title}`}>
          <p className={`text colorWhite`} onClick={() => pageReload()}>대양 ING</p>
        </div>
        <div className={`${style.categories}`}>
          <p className={`text colorWhite`} onClick={() => moveToRequestComponent()}>발주하러 가기</p>
        </div>
      </div>
    </div>
  )
}

export default header;