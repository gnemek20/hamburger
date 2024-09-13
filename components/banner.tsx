import style from '@/styles/components/banner/banner.module.css'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface imageAttributes {
  src: StaticImport,
  alt: string
}

interface bannerAttributes {
  image: imageAttributes,
  title: string,
  subTitle: string
}

const banner = ({image, title, subTitle}: bannerAttributes) => {
  return (
    <div className={`${style.banner}`}>
      <Image className={`${style.image}`} src={image.src} alt={image.alt} />
      <h1 className={`title colorWhite`}>{ title }</h1>
      <p className={`mobileText colorWhite`}>{ subTitle }</p>
    </div>
  )
}

export default banner;