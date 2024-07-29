import style from '@/styles/components/map/map.module.css'
import animation from '@/styles/components/map/animation.module.css'
import { Section } from '.'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const copyIcon = {
  src: require('@/public/icons/copy.svg'),
  alt: 'copyIcon'
}

const checkIcon = {
  src: require('@/public/icons/check.svg'),
  alt: 'checkIcon'
}

const map = () => {
  const map = useRef<Element | any>(null);
  const mapCoverRef = useRef<HTMLDivElement>(null);

  const [isToggledCover, setIsToggledCover] = useState<boolean>(true);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const address = '서울특별시 종로구 김상옥로 59, 한아빌딩 3층';

  const checkClick = () => {
    if (isClicked) {
      setIsToggledCover(!isToggledCover);
      setIsClicked(false);
    }
    else {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 300);
    }
  }

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
    catch (err) {
      alert('복사에 실패했습니다.');
      return
    }
  }

  useEffect(() => {
    if (isToggledCover) {
      setTimeout(() => {
        mapCoverRef.current?.setAttribute('style', 'display: flex');
      }, 250);
    }
    else {
      setTimeout(() => {
        mapCoverRef.current?.setAttribute('style', 'display: none');
      }, 250);
    }
  }, [isToggledCover])

  useEffect(() => {
    const location: { latitude: number, longtitude: number } = {
      latitude: 37.57360,
      longtitude: 127.00450
    }

    map.current = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(location.latitude - 0.001, location.longtitude),
      zoom: 16
    })

    new naver.maps.Marker({
      position: new naver.maps.LatLng(location.latitude, location.longtitude),
      map: map.current
    })
  }, [])

  return (
    <Section className={`flex justifyCenter`}>
      <div className={`relative flex limitWidth maxWidth`}>
        <div
          className={`
            maxWidth
            ${style.map}
          `}
          id='map'
          onClick={() => checkClick()}
        />
        <div
          ref={mapCoverRef}
          className={`
            absolute
            maxWidth
            maxHeight
            flex
            justifyCenter
            alignCenter
            ${style.mapCover}
            ${!isToggledCover ? animation.mapCoverFadeOut : animation.mapCoverFadeIn}
          `}
          onClick={() => checkClick()}
        >
          <h1 className={`title textCenter preventEvent colorWhite`}>더블클릭으로<br/>잠금을 해제합니다.</h1>
        </div>
        <div className={`absolute flex mobileFlexColumn ${style.optionContainer}`}>
          <div className={`flex alignCenter ${style.information}`} onClick={() => copyAddress()}>
            <p className={`text preventEvent`}>{ address }</p>
            {
              isCopied ? (
                <Image className={`preventEvent ${style.copyOptionIcon}`} src={checkIcon.src} alt={checkIcon.alt} />
              ) : (
                <Image className={`preventEvent ${style.copyOptionIcon}`} src={copyIcon.src} alt={copyIcon.alt} />
              )
            }
          </div>
        </div>
      </div>
    </Section>
  )
}

export default map