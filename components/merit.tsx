import Image from "next/image";
import style from '@/styles/components/merit/merit.module.css'
import { Banner, Offset } from ".";

const bannerImage = {
  src: require('@/public/images/company.jpg'),
  alt: 'bannerImage'
}

const runnerIcon = {
  src: require('@/public/icons/runner.svg'),
  alt: 'runner'
}

const merit = () => {
  interface meritAttribute {
    title: string
    subTitle: string,
    icon: typeof bannerImage
  }

  const meritList = new Array(
    {
      title: '속도',
      subTitle: '속도속도',
      icon: runnerIcon
    }
  );

  return (
    <>
      <Offset size={75} />
      <Banner image={bannerImage} title="대양ING의 강점" subTitle="Merit of DaeYangING" />
      <div className={`${style.meritList}`}>
        {
          meritList.map((merit, index) => (
            <div className={`${style.merit}`} key={index}>
              <div className={`${style.meritIcon}`}>
                <Image src={merit.icon.src} alt={merit.icon.alt} /> 
              </div>
              <p className="text">{ merit.title }</p>
              <p className="mobileText">{ merit.subTitle }</p>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default merit;