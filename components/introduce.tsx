import style from '@/styles/components/introduce/introduce.module.css'
import animation from '@/styles/components/introduce/animation.module.css'
import { ImageFrame, Section } from '.'
import Image from 'next/image'

const introduce = () => {
  const thumbnailImage = {
    src: require('@/public/images/shoe.jpg'),
    alt: 'thumbnailImage'
  }
  
  return (
    <Section className={`flex justifyCenter`} gray>
      <div className={`flex limitWidth maxWidth alignEnd mobileAlignStart mobileFlexColumn`}>
        <div className={`flex flexColumn ${style.content}`}>
          <h1 className={`title`}>샘플 텍스트</h1>
          <div>
            <p className={`text`}>회사에 대한 설명</p>
            <p className={`text`}>의도적인 여러줄도 가능함</p>
          </div>
        </div>
        <ImageFrame className={`${style.thumbnail}`} image={thumbnailImage} />
      </div>
    </Section>
  )
}

export default introduce