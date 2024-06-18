import style from '@/styles/components/header/header.module.css'
import animation from '@/styles/components/header/animation.module.css'
import { RefObject, useEffect } from 'react';

interface headerProps {
  requestComponentRef: RefObject<HTMLDivElement>
}

const header = (props: headerProps) => {
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

  return (
    <div className={`flex justifyCenter ${style.header}`}>
      <div className={`limitWidth maxWidth flex spaceBetween`}>
        <div className={`${style.title}`}>
          <p className={`text colorWhite`}>대양 ING</p>
        </div>
        <div className={`${style.categories}`}>
          <p className={`text colorWhite`}>Category1</p>
          <p className={`text colorWhite`}>Category2</p>
          <p className={`text colorWhite`} onClick={() => moveToRequestComponent()}>발주 문의</p>
        </div>
      </div>
    </div>
  )
}

export default header;