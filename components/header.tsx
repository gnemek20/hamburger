import { routerPush } from '@/public/functions/default';
import styles from '@/styles/components/header/header.module.css'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

const hamburgerIcon = {
  src: require('@/public/icons/hamburger.svg'),
  alt: 'hamburger'
}

const header = () => {
  const router = useRouter();

  const [toggledCategory, setToggledCategory] = useState<boolean>(false);

  const toggleCategory = () => {
    setToggledCategory(!toggledCategory);
  }

  return (
    <div className={`${styles.headerContainer}`}>
      <div className={`${styles.toggleButton}`} onClick={() => toggleCategory()}>
        <Image src={hamburgerIcon.src} alt={hamburgerIcon.alt} />
      </div>
      {
        toggledCategory && <div className={`${styles.headerBackground}`} onClick={() => toggleCategory()} />
      }
      <div className={`${styles.categoryContainer} ${toggledCategory && styles.toggledCategoryContainer}`}>
        <div className={`${styles.categoryList}`}>
          <div className={`${styles.category}`}>
            <div className={`${styles.categoryClass}`}>
              <h1>LANDING</h1>
            </div>
            <div className={`${styles.categoryContent}`}>
              <div onClick={() => routerPush(router, '/')}>
                <p>메인 페이지</p>
              </div>
            </div>
          </div>
          <div className={`${styles.category}`}>
            <div className={`${styles.categoryClass}`}>
              <h1>INTRODUCE</h1>
            </div>
            <div className={`${styles.categoryContent}`}>
              <div onClick={() => routerPush(router, '/introduce')}>
                <p>대양ING 제품</p>
              </div>
            </div>
          </div>
          <div className={`${styles.category}`}>
            <div className={`${styles.categoryClass}`}>
              <h1>CONTACT</h1>
            </div>
            <div className={`${styles.categoryContent}`}>
              <div onClick={() => routerPush(router, '/request')}>
                <p>제품 발주 문의</p>
              </div>
              <div onClick={() => routerPush(router, 'map')}>
                <p>오시는 길</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default header;