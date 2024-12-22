import { Header, TopBanner } from "@/components";

const bannerImage = {
  src: require('@/public/images/truck.jpg'),
  alt: 'banner'
}

const Request = () => {
  return (
    <>
      <Header />
      <TopBanner bannerImage={bannerImage} title="샘플 텍스트" subTitle="부제목" />
    </>
  );
}

export default Request;