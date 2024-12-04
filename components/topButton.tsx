import style from '@/styles/components/topButton/topButton.module.css'
import Image from 'next/image'

interface pageProps {
  componentNames: Array<string>
}

const downArrowIcon = {
  src: require('@/public/icons/downArrow.svg'),
  alt: 'downArrow'
}

const topButton = (props: pageProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    });
  }

  return (
    <div className={`${style.topLayer}`}>
      <div className={`${style.toTopButton}`} onClick={() => scrollToTop()}>
        <Image src={downArrowIcon.src} alt={downArrowIcon.alt} />
      </div>
    </div>
  )
}

export default topButton;