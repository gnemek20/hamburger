import style from '@/styles/components/imageFrame/imageFrame.module.css'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface imageProps {
  src: StaticImport
  alt: string
}

interface imageFrameProps {
  image: imageProps
  className?: string
}

const imageFrame = (props: imageFrameProps) => {
  return (
    <div className={`flex relative ${props.className}`}>
      <Image className={`maxWidth maxHeight ${style.image}`} src={props.image.src} alt={props.image.alt} />
      <div className={`absolute ${style.frame}`} />
    </div>
  )
}

export default imageFrame