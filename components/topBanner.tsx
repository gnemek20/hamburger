import Image from "next/image";
import styles from '@/styles/components/topBanner/topBanner.module.css';
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface componentProps {
  bannerImage: { src: StaticImport, alt: string };
  title: string;
  subTitle: string;
}

const topBanner = (props: componentProps) => {
  return (
    <div className={`${styles.topBanner}`}>
      <Image src={props.bannerImage.src} alt={props.bannerImage.alt} />
      <div>
        <h1 className={`title`}>{ props.title }</h1>
        <p className={`text`}>{ props.subTitle }</p>
      </div>
    </div>
  );
}

export default topBanner;