import { Header, PageTitle, TopBanner } from "@/components";
import styles from '@/styles/introduce.module.css';
import Image from "next/image";

const bannerImage = {
  src: require('@/public/images/blueprint.jpg'),
  alt: 'banner'
}

const Introduce = () => {
  return (
    <>
      <Header />
      <TopBanner bannerImage={bannerImage} title={`샘플 텍스트`} subTitle={`부제목`} />
      <PageTitle title="PRODUCT" />
      <div className={`${styles.introduceContainer}`}>
        <div className={`${styles.category}`}>
          <div className={`${styles.list}`}>
            <div>
              <h1 className={`title`}>지퍼</h1>
              <p className={`mobileText ${styles.more}`}>부가 설명</p>
            </div>
            <div>
              <h1 className={`title`}>슬라이더</h1>
              <p className={`mobileText ${styles.more}`}>부가 설명</p>
            </div>
            <div>
              <h1 className={`title`}>풀러</h1>
              <p className={`mobileText ${styles.more}`}>부가 설명</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduce;