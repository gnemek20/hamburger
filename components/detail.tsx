import style from '@/styles/components/detail/detail.module.css'
import animation from '@/styles/components/detail/animation.module.css'
import { Section } from '.'
import Flicking, { FlickingError } from '@egjs/react-flicking'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

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

const content = (title: string, text: string) => {
  return (
    <>
      <h1 className={`title`}>{ title }</h1>
      <p className={`text whiteSpaceWrap`}>{ text }</p>
    </>
  )
}

const detail = () => {
  const flickingRef = useRef<Flicking>(null);

  const [panelIndex, setPanelIndex] = useState<number>(0);
  const [flickingPanelCount, setFlickingPanelCount] = useState<number>(0);

  interface panelProps {
    image: typeof arrowIcon,
    title: string,
    text: string
  }

  const panelList: Array<panelProps> = [
    {
      image: clotheButtonImage,
      title: '종류1',
      text: ['의도적인', '여러줄 입력을', '확인하기 위함입니다 ^o^'].join('\n')
    },
    {
      image: shoeImage,
      title: '종류2',
      text: '테스트2'
    },
    {
      image: zipperImage,
      title: '종류3',
      text: '테스트3'
    }
  ];

  const recordFlickingStatus = () => {
    setPanelIndex(flickingRef.current?.index || 0);
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
    setFlickingPanelCount(flickingRef.current?.panelCount ? flickingRef.current?.panelCount - 1 : 0);
  }, [])

  return (
    <Section className={`flex justifyCenter`} gray>
      <div className={`limitWidth flex flexColumn maxWidth ${style.detail}`}>
        <div className={`flex justifyCenter ${style.naverFlicking}`}>
          <Flicking onChanged={() => recordFlickingStatus()} ref={flickingRef}>
            {
              panelList.map((panel, index) => (
                <div className={`flex justifyCenter ${style.flickingPanel}`} key={index}>
                  <Image src={panel.image.src} alt={panel.image.alt} />
                </div>
              ))
            }
          </Flicking>
          <Image className={`${style.arrowIcon} ${style.leftArrowIcon} ${panelIndex === 0 && style.disabledIcon}`} src={arrowIcon.src} alt={arrowIcon.alt} onClick={() => panelIndex !== 0 && movePanel('left')} />
          <Image className={`${style.arrowIcon} ${style.rightArrowIcon} ${panelIndex === flickingPanelCount && style.disabledIcon}`} src={arrowIcon.src} alt={arrowIcon.alt} onClick={() => panelIndex !== flickingPanelCount && movePanel('right')} />
          <div className={`${style.simplePanelBackground}`}>
            {
              panelList.map((panel, index) => (
                <div className={`${style.simplePanelContainer}`} onClick={() => changePanelIndex(index)} key={index}>
                  <div className={`${style.simplePanel} ${index === panelIndex && style.activedSimplePanel}`} />
                </div>
              ))
            }
          </div>
        </div>
        <div className={`textCenter ${style.content}`}>
          { content(panelList[panelIndex].title, panelList[panelIndex].text) }
        </div>
      </div>
    </Section>
  )
}

export default detail