import style from '@/styles/components/zipperStructure/zipperStructure.module.css'
import animation from '@/styles/components/zipperStructure/animation.module.css'
import { Section } from '.'
import Image from 'next/image'
import { RefObject, useEffect, useState } from 'react'

const zipperSliderIcon = {
  src: require('@/public/icons/zipperSlider.svg'),
  alt: 'zipperSliderIcon'
}

interface zipperStructureProps {
  elementRef: RefObject<HTMLDivElement>
  startAnimation: boolean
}

const ZipperStructure = (props: zipperStructureProps) => {
  type analysationType = 'Zipper' | 'Slider & Puller' | '';
  const [hoveredType, setHoveredType] = useState<analysationType>('');

  const zipper = (
    <div className={`relative ${style.zipper}`}>
      <div className={`${style.zipperLineContainer}`} onMouseEnter={() => setHoveredType('Zipper')} onMouseLeave={() => setHoveredType('')}>
        <div className={`${style.zipperLine} ${hoveredType === 'Zipper' && style.hoveredZipperLine}`} />
        <div className={`${style.zipperLine} ${hoveredType === 'Zipper' && style.hoveredZipperLine}`} />
      </div>
      <Image className={`invert absolute ${style.zipperSlider} ${hoveredType === 'Slider & Puller' && style.hoveredZipperSlider}`} src={zipperSliderIcon.src} alt={zipperSliderIcon.alt} onMouseEnter={() => setHoveredType('Slider & Puller')} onMouseLeave={() => setHoveredType('')} />
    </div>
  )

  const analysation = (type: 'Zipper' | 'Slider & Puller' | '', reverse?: boolean) => {
    return (
      <div className={`relative ${style.analysation} ${reverse && style.reversedAnalysation}`}>
        <div className={`flex flexColumn justifyCenter ${style.analysationDescription}`} onMouseEnter={() => setHoveredType(type)} onMouseLeave={() => setHoveredType('')}>
          <div className={`maxWidth`}>
            <h1 className={`text ${style.analysationTitle} ${hoveredType === type && style.hoveredAnalysationTitle} ${reverse && style.reversedAnalysationTitle} ${props.startAnimation && animation.textFadeIn}`}>{ type }</h1>
          </div>
        </div>
        <div className={`flex flexColumn alignCenter ${style.analysationLineContainer}`}>
          <div className={`${style.analysationLine} ${props.startAnimation && animation.horizontalLineExpand}`} />
          <div className={`${style.analysationLine} ${props.startAnimation && animation.verticalLineExpand}`} />
        </div>
      </div>
    )
  }

  return (
    <Section className={`flex justifyCenter alignCenter ${style.zipperStructure}`} height={200}>
      <div className={`flex flexColumn justifyCenter limitWidth maxWidth maxHeight relative`} ref={props.elementRef}>
        <p className={`additionalText textCenter ${style.explanationText}`}>아이콘이나 텍스트를 클릭해보세요.</p>
        { zipper }
        { analysation('Zipper') }
        { analysation('Slider & Puller', true) }
      </div>
    </Section>
  )
}

export default ZipperStructure