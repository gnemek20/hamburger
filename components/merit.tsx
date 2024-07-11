import style from '@/styles/components/merit/merit.module.css'
import animation from '@/styles/components/merit/animation.module.css'
import { Section } from '.'
import { RefObject } from 'react'

interface meritProps {
  elementRef: RefObject<HTMLDivElement>
  startAnimation: boolean
}

const merit = (props: meritProps) => {
  return (
    <Section className={`flex justifyCenter`} gray>
      <div className={`limitWidth maxWidth ${style.container}`} ref={props.elementRef}>
        <div className={`opacityNone ${style.panel} ${animation.default} ${props.startAnimation && animation.firstPanelSlideIn}`}>
          <div className={`${style.panelPit}`} />
          <h1 className={`mobileTitle`}>샘플 강조 텍스트</h1>
          <h1 className={`text ${style.panelTag}`}>#Sample</h1>
        </div>
        <div className={`opacityNone ${style.panel} ${animation.default} ${props.startAnimation && animation.secondPanelSlideIn}`}>
          <div className={`${style.panelPit}`} />
          <h1 className={`mobileTitle`}>회사에서 내세울 강점을 한 줄 내외로 서술해주세요</h1>
          <h1 className={`text ${style.panelTag}`}>#Company</h1>
        </div>
        <div className={`opacityNone ${style.panel} ${animation.default} ${props.startAnimation && animation.thirdPanelSlideIn}`}>
          <div className={`${style.panelPit}`} />
          <h1 className={`mobileTitle`}>텍스트 크기 조절도 가능합니다</h1>
          <h1 className={`text ${style.panelTag}`}>#Resize</h1>
        </div>
      </div>
    </Section>
  )
}

export default merit