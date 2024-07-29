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
  type analysationTag = 'Zipper' | 'Slider & Puller' | '';
  const [hoveredTag, setHoveredTag] = useState<analysationTag>('');
  const [toggledTag, setToggledTag] = useState<analysationTag>('');

  const changeToggledTag = (tag: analysationTag) => {
    if (toggledTag === '' || toggledTag !== tag) {
      setToggledTag(tag);
    }
    else {
      setToggledTag('');
      setHoveredTag('');
    }
  }

  const zipper = (
    <div className={`relative ${style.zipper}`}>
      <div className={`${style.zipperLineContainer}`} onMouseEnter={() => setHoveredTag('Zipper')} onMouseLeave={() => setHoveredTag('')} onClick={() => changeToggledTag('Zipper')}>
        <div className={`${style.zipperLine} ${(hoveredTag || toggledTag) === 'Zipper' && style.hoveredZipperLine}`} />
        <div className={`${style.zipperLine} ${(hoveredTag || toggledTag) === 'Zipper' && style.hoveredZipperLine}`} />
      </div>
      <Image
        className={`invert absolute ${style.zipperSlider} ${(hoveredTag || toggledTag) === 'Slider & Puller' && style.hoveredZipperSlider}`}
        src={zipperSliderIcon.src}
        alt={zipperSliderIcon.alt}
        onMouseEnter={() => setHoveredTag('Slider & Puller')}
        onMouseLeave={() => setHoveredTag('')}
        onClick={() => changeToggledTag('Slider & Puller')}
      />
    </div>
  )

  const analysation = (tag: 'Zipper' | 'Slider & Puller' | '', reverse?: boolean) => {
    return (
      <div className={`relative ${style.analysation} ${reverse && style.reversedAnalysation}`}>
        <div className={`flex flexColumn justifyCenter ${style.analysationDescription}`} onMouseEnter={() => setHoveredTag(tag)} onMouseLeave={() => setHoveredTag('')} onClick={() => changeToggledTag(tag)}>
          <div className={`maxWidth`}>
            <h1
              className={`
                text
                ${style.analysationTitle}
                ${(hoveredTag || toggledTag) === tag && style.hoveredAnalysationTitle}
                ${reverse && style.reversedAnalysationTitle}
                ${props.startAnimation && animation.textFadeIn}
              `}
            >
              { tag }
            </h1>
          </div>
        </div>
        <div className={`flex flexColumn alignCenter ${style.analysationLineContainer}`}>
          <div className={`${style.analysationLine} ${props.startAnimation && animation.horizontalLineExpand}`} />
          <div className={`${style.analysationLine} ${props.startAnimation && animation.verticalLineExpand}`} />
        </div>
      </div>
    )
  }

  const dialog = toggledTag !== '' &&  (
    <div className={`flex flexColumn ${style.dialog} ${toggledTag === 'Zipper' ? style.zipperDialog : toggledTag === 'Slider & Puller' ? style.sliderDialog : ''}`}>
      <div className={`flex`}>
        <div className={`${style.dialogTag}`}>
          <p className={`additionalText`}>{ toggledTag }</p>
        </div>
      </div>
    </div>
  )

  return (
    <Section className={`flex justifyCenter alignCenter ${style.zipperStructure}`} height={200}>
      <div className={`flex flexColumn justifyCenter limitWidth maxWidth maxHeight relative`} ref={props.elementRef}>
        <p className={`additionalText textCenter ${style.explanationText}`}>아이콘이나 텍스트를 클릭해보세요.</p>
        { dialog }
        { zipper }
        { analysation('Zipper') }
        { analysation('Slider & Puller', true) }
      </div>
    </Section>
  )
}

export default ZipperStructure