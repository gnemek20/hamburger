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
            <p className={`text`}>회사에 대한 설명</p>
            <p className={`text`}>의도적인 여러줄도 가능함</p>
          </div>
        </div>
        <ImageFrame className={`opacityNone ${style.thumbnail} ${props.startAnimation && animation.thumbnailSlideIn}`} image={thumbnailImage} />
      </div>
    </Section>
  )
}

export default introduce