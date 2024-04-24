import style from '@/styles/components/emphasizeScroll/emphasizeScroll.module.css'
import animation from '@/styles/components/emphasizeScroll/animation.module.css'
import Image from 'next/image'

interface emphasizeScrollProps {
  className?: string
}

const emphasizeScroll = (props: emphasizeScrollProps) => {
  const downArrowIcon = {
    src: require('@/public/icons/downArrow.svg'),
    alt: 'downArrowIcon'
  }

  return (
    <div className={`absolute ${props.className} ${style.container}`}>
      <Image className={`${style.downArrowIcon} ${animation.downArrowIconSliding}`} src={downArrowIcon.src} alt={downArrowIcon.alt} />
    </div>
  )
}

export default emphasizeScroll