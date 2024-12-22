import styles from '@/styles/components/introduce/introduce.module.css'
import animations from '@/styles/components/introduce/animation.module.css'
import { RefObject, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { observeElement } from '@/functions/observeElement'

interface componentProps {
  elementRef: RefObject<HTMLDivElement>
}

const backgroundImage = {
  src: require('@/public/images/suit.jpg'),
  alt: 'backgroundImage'
}

const thumbnailImage = {
  src: require('@/public/logo.svg'),
  alt: 'thumbnailImage'
}

const introduce = (props: componentProps) => {
  const animationTriggerElement = useRef<HTMLDivElement>(null);

  const [animationTrigger, setAnimationTrigger] = useState<boolean>(false);

  useEffect(() => {
    observeElement(animationTriggerElement, () => setAnimationTrigger(true));
  }, [])
  
  return (
    <div ref={props.elementRef} className={`${styles.section}`}>
      <div className={`${styles.background}`}>
        <Image src={backgroundImage.src} alt={backgroundImage.alt} />
        <div className={`${styles.gradation}`}>
          <div />
          <div />
        </div>
      </div>
      <div ref={animationTriggerElement} className={`${styles.introduceContainer}`}>
        <div className={`${styles.introduceContent}`}>
          <h1 className={`title opacityNone colorWhite ${animationTrigger && animations.titleSlideIn}`}>대양 아이엔지란?</h1>
          <div className={`opacityNone ${animationTrigger && animations.textSlideIn}`}>
            <p className={`text colorWhite`}>국내 최고의 패션 리더 그룹사들의 파트너로서</p>
            <p className={`text colorWhite`}>20여 년간 끊임없는 신뢰와 열정으로 함께 걸어가고 있습니다.</p>
            <br />
            <p className={`text colorWhite`}>최상의 품질, 빠른 생산 납기 시스템으로</p>
            <p className={`text colorWhite`}>국내 20여 브랜드에 납품하고 있으며,</p>
            <br />
            <p className={`text colorWhite`}>희망과 꿈을 이루어가는 고객사들의</p>
            <p className={`text colorWhite`}>최고의 파트너가 되도록 더욱 노력하겠습니다.</p>
            <br />
            <p className={`text colorWhite`}>패션의 완성을 위한 최고의 선택!</p>
            <p className={`text colorWhite`}>Zipper 전문 회사 대양과 함께 경험해보세요.</p>
            <br />
            <p className={`additionalText colorWhite`}>주식회사 대양아이엔지 ⓒ</p>
          </div>
        </div>
        <div className={`${styles.introduceThumbnail} ${animationTrigger && animations.thumbnailSlideIn}`}>
          <Image src={thumbnailImage.src} alt={thumbnailImage.alt} />
        </div>
      </div>
    </div>
  )
}

export default introduce