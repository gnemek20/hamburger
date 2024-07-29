import style from '@/styles/components/introduce/introduce.module.css'
import animation from '@/styles/components/introduce/animation.module.css'
import { ImageFrame, Section } from '.'
import { RefObject, useEffect } from 'react'

interface introduceProps {
  elementRef: RefObject<HTMLDivElement>
  startAnimation: boolean
}

const introduce = (props: introduceProps) => {
  const thumbnailImage = {
    src: require('@/public/images/shoe.jpg'),
    alt: 'thumbnailImage'
  }
  
  return (
    <Section className={`flex justifyCenter`} gray>
      <div ref={props.elementRef} className={`flex limitWidth maxWidth alignEnd mobileAlignStart mobileFlexColumn`}>
        <div className={`flex flexColumn ${style.content}`}>
          <h1 className={`title opacityNone ${props.startAnimation && animation.titleSlideIn}`}>샘플 텍스트</h1>
          <div className={`opacityNone ${props.startAnimation && animation.textSlideIn}`}>
            <p className={`text`}>국내 최고의 패션 리더 그룹사들의 파트너로서</p>
            <p className={`text`}>20여 년간 끊임없는 신뢰와 열정으로 함께 걸어가고 있습니다</p>
            <br />
            <p className={`text`}>최상의 품질, 빠른 생산 납기 시스템으로</p>
            <p className={`text`}>국내 20여 브랜드에 납품하고 있으며,</p>
            <br />
            <p className={`text`}>희망과 꿈을 이루어가는 고객사들의</p>
            <p className={`text`}>최고의 파트너가 되도록 더욱 노력하겠습니다</p>
            <br />
            <p className={`text`}>패션의 완성을 위한 최고의 선택!</p>
            <p className={`text`}>Zipper 전문 회사 대양과 함께 경험해보세요.</p>
            <br />
            <p className={`additionalText`}>주식회사 대양아이엔지 ⓒ</p>
          </div>
        </div>
        <ImageFrame className={`opacityNone ${style.thumbnail} ${props.startAnimation && animation.thumbnailSlideIn}`} image={thumbnailImage} />
      </div>
    </Section>
  )
}

export default introduce