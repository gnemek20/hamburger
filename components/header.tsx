import style from '@/styles/components/header/header.module.css'
import animation from '@/styles/components/header/animation.module.css'
import { RefObject, useEffect } from 'react';
import { useRouter } from 'next/router';

interface headerProps {
  requestComponentRef: RefObject<HTMLDivElement>
}

const header = (props: headerProps) => {
  const router = useRouter();

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

  return (
    <div className={`flex justifyCenter ${style.header}`}>
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