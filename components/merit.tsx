import Image from "next/image";
import { Banner, Offset } from ".";

const bannerImage = {
  src: require('@/public/images/company.jpg'),
  alt: 'bannerImage'
}

const merit = () => {
  return (
    <>
      <Offset size={75} />
      <Banner image={bannerImage} title="회사의 가치" subTitle="Merit of Company" />
    </>
  );
}

export default merit;