import style from '@/styles/components/background/background.module.css'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image'

interface backgroundProps {
  image: StaticImport
  gradation?: boolean
}

const background = (props: backgroundProps) => {
  const background = {
    src: props.image,
    alt: 'background'
  }

  return (
    <div className={`${style.background}`}>
      <Image src={background.src} alt={background.alt} />
      {
        props.gradation && (
          <div className={`${style.gradation}`}>
            <div />
            <div />
          </div>
        )
      }
    </div>
  )
}

export default background;