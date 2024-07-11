import style from '@/styles/components/detail/detail.module.css'
import animation from '@/styles/components/detail/animation.module.css'
import Flicking, { FlickingError } from '@egjs/react-flicking'
import Image from 'next/image'
import { RefObject, useEffect, useRef, useState } from 'react'

interface detailProps {
  elementRef: RefObject<HTMLDivElement>
  startAnimation: boolean
}

const arrowIcon = {
  src: require('@/public/icons/downArrow.svg'),
  alt: 'downArrowIcon'
}

const clotheButtonImage = {
  src: require('@/public/images/clotheButton.jpg'),
  alt: 'clotheButtonImage'
}
const shoeImage = {
  src: require('@/public/images/shoe.jpg'),
  alt: 'clotheButtonImage'
}
const zipperImage = {
  src: require('@/public/images/zipper.jpg'),
  alt: 'clotheButtonImage'
}

const detail = (props: detailProps) => {
  const flickingRef = useRef<Flicking>(null);

  const [panelIndex, setPanelIndex] = useState<number>(0);
  const [flickingPanelLength, setFlickingPanelLength] = useState<number>(0);
  const [isMovingPanel, setIsMovingPanel] = useState<boolean>(true);

  interface panelProps {
    image: typeof arrowIcon,
    title: string,
    text: string
  }

  const panelList: Array<panelProps> = [
    {
      image: clotheButtonImage,
      title: '종류1',
      text: ['여러줄로도 입력이 가능합니다.', '모바일 환경일 때 글자 수에 주의해주세요.'].join('\n')
    },
    {
      image: shoeImage,
      title: '종류2',
      text: '텍스트2'
    },
    {
      image: zipperImage,
      title: '종류3',
      text: '텍스트3'
    }
  ];

  const recordFlickingStatus = () => {
    setPanelIndex(flickingRef.current?.index || 0);
  }

  const startMoveAnimation = () => {
    setIsMovingPanel(true);
  }
  const finishMoveAnimation = () => {
    setIsMovingPanel(false);
  }

  const movePanel = (direction: 'left' | 'right') => {
    if (flickingRef.current?.animating) return;
    
    switch (direction) {
      case 'left': {
        flickingRef.current?.prev().catch((err) => {
          if (err instanceof FlickingError) return;
          throw err
        });
        break;
      }
      case 'right': {
        flickingRef.current?.next().catch((err) => {
          if (err instanceof FlickingError) return;
          throw err
        });
        break;
      }
    }
  }

  const changePanelIndex = (index: number) => {
    if (flickingRef.current?.animating) return;

    const nextPanelIndex = index;
    flickingRef.current?.moveTo(nextPanelIndex).catch((err) => {
      if (err instanceof FlickingError) return;
      throw err
    });
  }

  useEffect(() => {
    setIsMovingPanel(!props.startAnimation);
  }, [props.startAnimation])

  useEffect(() => {
    setFlickingPanelLength(flickingRef.current?.panelCount ? flickingRef.current?.panelCount - 1 : 0);
  }, [])

  const introduction = (title: string, text: string) => {
    return (
      <>
        <h1 className={`title colorWhite ${isMovingPanel ? animation.introductionSlideOut : animation.introductionTitleSlideIn}`}>{ title }</h1>
        <p className={`text whiteSpaceWrap colorWhite ${isMovingPanel ? animation.introductionSlideOut : animation.introductionTextSlideIn}`}>{ text }</p>
      </>
    )
  }

  return (
    <div className={`flex justifyCenter maxWidth ${style.detail}`} ref={props.elementRef}>
      <Flicking onMoveStart={() => startMoveAnimation()} onMoveEnd={() => finishMoveAnimation()} onChanged={() => recordFlickingStatus()} ref={flickingRef}>
        {
          panelList.map((panel, index) => (
            <div className={`flex justifyCenter ${style.flickingPanel}`} key={index}>
              <Image className={`${style.flickingImage} ${isMovingPanel ? animation.flickingImageLightly : animation.flickingImageDarkly}`} src={panel.image.src} alt={panel.image.alt} />
            </div>
          ))
        }
      </Flicking>
      <Image className={`${style.arrowIcon} ${style.leftArrow} ${panelIndex === 0 && style.disabledArrowIcon}`} src={arrowIcon.src} alt={arrowIcon.alt} onClick={() => movePanel('left')} />
      <Image className={`${style.arrowIcon} ${style.rightArrow} ${panelIndex === flickingPanelLength && style.disabledArrowIcon}`} src={arrowIcon.src} alt={arrowIcon.alt} onClick={() => movePanel('right')} />
      <div className={`${style.simplePanelBackground}`}>
        {
          panelList.map((panel, index) => (
            <div className={`${style.simplePanelContainer}`} onClick={() => changePanelIndex(index)} key={index}>
              <div className={`${style.simplePanel} ${index === panelIndex && style.activedSimplePanel}`} />
            </div>
          ))
        }
      </div>
      <div className={`flex flexColumn textCenter ${style.introduction}`}>
        { introduction(panelList[panelIndex].title, panelList[panelIndex].text) }
      </div>
    </div>
  )
}

export default detail