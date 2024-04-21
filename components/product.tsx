import style from '@/styles/components/product/product.module.css'
import animation from '@/styles/components/product/animation.module.css'
import { RefObject } from 'react'
import { ImageFrame, Section } from '.'

interface productProps {
  elementRef: RefObject<HTMLDivElement>
  startAnimation: boolean
}

const product = (props: productProps) => {
  const zipperImage = {
    src: require('@/public/images/zipper.jpg'),
    alt: 'zipperImage'
  }
  const clotheButtonImage = {
    src: require('@/public/images/clotheButton.jpg'),
    alt: 'clotheButtonImage'
  }

  return (
    <Section className={`flex justifyCenter`}>
      <div className={`limitWidth maxWidth flex flexColumn ${style.container}`} ref={props.elementRef}>
        <div className={`${style.panel}`}>
          <ImageFrame className={`${style.thumbnail}`} image={zipperImage} />
          <div className={`${style.thumbnailCover}`} />
          <div className={`${style.content}`}>
            <h1 className={`title`}>Zipper</h1>
            <div>
              <p className={`text`}>지퍼에 관한 설명</p>
              <p className={`text`}>여러줄 입력 가능</p>
              <p className={`text`}>엄청길면어떻게되는지테스트</p>
            </div>
          </div>
        </div>
        <div className={`reverse ${style.panel}`}>
          <ImageFrame className={`${style.thumbnail}`} image={clotheButtonImage} />
          <div className={`${style.thumbnailCover}`} />
          <div className={`reverse textEnd mobileTextStart ${style.content}`}>
            <h1 className={`title`}>Button</h1>
            <div>
              <p className={`text`}>지퍼에 관한 설명</p>
              <p className={`text`}>여러줄 입력 가능</p>
              <p className={`text`}>엄청길면어떻게되는지테스트</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default product