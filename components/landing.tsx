import style from '@/styles/components/landing/landing.module.css'
import animation from '@/styles/components/landing/animation.module.css'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const landing = () => {
  const zipperSliderIcon = {
    src: require('@/public/icons/zipperSlider.svg'),
    alt: 'zipperSliderIcon'
  }
  const clotheButtonIcon = {
    src: require('@/public/icons/clotheButton.svg'),
    alt: 'clotheButtonIcon'
  }

  const zipperRef = useRef<HTMLDivElement>(null);

  const [animationCounter, setAnimationCounter] = useState<number>(0);

  useEffect(() => {
    const startDelay = 1500;
    const sectionDuration = 2500;
    let animationDelay = startDelay;

    setTimeout(() => setAnimationCounter(1), animationDelay);
    setTimeout(() => zipperRef.current?.classList.remove('opacityNone'), animationDelay + 100);

    animationDelay += sectionDuration;
    setTimeout(() => setAnimationCounter(2), animationDelay);
    animationDelay += sectionDuration
    setTimeout(() => setAnimationCounter(3), animationDelay);

    animationDelay += 3000;
    setTimeout(() => setAnimationCounter(4), animationDelay);

    animationDelay += 500;
    setTimeout(() => setAnimationCounter(5), animationDelay);
  }, [])

  return (
    <div
      className={`
        flex
        justifyCenter
        alignCenter
        fullWidth
        fullHeight
        relative
        hidden
      `}
    >
      <div
        className={`
          absolute
          fullWidth
          fullHeight
          ${style.blackBackground}
          ${animationCounter >= 1 && animation.blackBackgroundSlideIn}
        `}
      />
      <div className={`textCenter ${animationCounter >= 1 && animation.questionTextSlideOut}`}>
        <h1 className={`title ${style.questionText}`}>보다 완벽한 옷으로</h1>
        <h1 className={`title ${style.questionText}`}>거듭난다는 것은</h1>
      </div>

      <div className={`absolute flex fullWidth ${animationCounter >= 2 && animation.sectionMove} ${animationCounter >= 3 && animation.sectionfadeOut}`}>
        <div className={`textStart flex flexColumn justifyCenter alignCenter ${style.section}`}>
          <div className={`opacityNone ${style.content}`} ref={zipperRef}>
            <h1 className={`title colorWhite maxWidth ${style.zipperText} ${animationCounter >= 1 && animation.sectionTextSlide}`}>부드러운 지퍼를</h1>
            <div className={`relative ${style.zipper}`}>
              <div className={`${style.zipperLine}`} />
              <div className={`${style.zipperLine}`} />
              <Image className={`invert absolute ${style.zipperSlider} ${animationCounter >= 1 && animation.zipperMove}`} src={zipperSliderIcon.src} alt={zipperSliderIcon.alt} />
            </div>
          </div>
        </div>

        <div className={`textEnd flex flexColumn justifyCenter alignCenter ${style.section}`}>
          <div className={`${style.content}`}>
            <div className={`flex relative ${style.clotheButton}`}>
              <Image className={`invert ${style.clotheButtonCap}`} src={clotheButtonIcon.src} alt={clotheButtonIcon.alt} />
              <div className={`flex ${animationCounter >= 2 && animation.clotheButtonCapMove}`}>
                <Image className={`invert ${style.clotheButtonCap} ${animationCounter >= 2 && animation.clotheButtonCapRoll}`} src={clotheButtonIcon.src} alt={clotheButtonIcon.alt} />
              </div>
              <div className={`absolute ${style.clotheButtonLine}`} />
            </div>
            <h1 className={`title colorWhite maxWidth ${style.buttonText} ${animationCounter >= 2 && animation.sectionTextSlide}`}>헤지지 않는 단추를</h1>
          </div>
        </div>
      </div>

      <div
        className={`
          absolute
          fullWidth
          fullHeight
          ${style.whiteBackground}
          ${animationCounter >= 3 && animation.whiteBackgroundSlideIn}
        `}
      />
      <div className={`absolute opacityNone ${animationCounter >= 3 && animation.solutionFadeIn} ${animationCounter >= 4 && animation.solutionFadeOut}`}>
        <h1 className={`title`}>달아준다는 것.</h1>
      </div>

      <div className={`absolute flex flexColumn alignCenter`}>
        <h1 className={`title opacityNone ${style.resultSubTitle} ${animationCounter >= 5 && animation.resultSubTitleSlideIn}`}>옷에 새로운 날개를 달다</h1>
        <div className={`opacityNone ${style.resultLine} ${animationCounter >= 5 && animation.resultLineExpand}`} />
        <h1 className={`title opacityNone ${style.resultTitle} ${animationCounter >= 5 && animation.resultTitleSlideIn}`}>대양ING</h1>
      </div>
    </div>
  )
}

export default landing