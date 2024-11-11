import style from '@/styles/components/banner/banner.module.css'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { LegacyRef } from 'react';

interface imageAttributes {
  src: StaticImport,
  alt: string
}

interface bannerAttributes {
  elementRef?: LegacyRef<HTMLDivElement>,
  image: imageAttributes,
  title: string,
  subTitle: string
}

const banner = ({elementRef, image, title, subTitle}: bannerAttributes) => {
  return (
    <div ref={elementRef} className={`${style.banner}`}>
      <Image className={`${style.image}`} src={image.src} alt={image.alt} />
      <h1 className={`title colorWhite`}>{ title }</h1>
      <p className={`mobileText colorWhite`}>{ subTitle }</p>
    </div>
  )
}

export default banner;