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

  const hideHeader = () => {
    const headerPos = headerRef.current?.getBoundingClientRect().top;

    if (headerPos === 0) {
      headerRef.current?.setAttribute('style', 'opacity: 0; touch-action: none; pointer-events: none;');
    }
  }
  
  const showHeader = () => {
    headerRef.current?.setAttribute('style', 'opacity: 1; touch-action: auto; pointer-events: auto;');
  }

  const checkDirection = () => {
    let throttleTimer: NodeJS.Timeout | null;
    let beforeScrollY: number = 0;
    let direction: 'up' | 'down';

    
    return () => {
      beforeScrollY > scrollY ? direction = 'up' : direction = 'down';

      if (!throttleTimer) {
        throttleTimer = setTimeout(() => {
          throttleTimer = null;

          if (direction === 'up') {
            showHeader();
          }
          else {
            hideHeader();
          }

          beforeScrollY = scrollY;
        }, 100);
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkDirection());

    return () => {
      window.removeEventListener('scroll', checkDirection());
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