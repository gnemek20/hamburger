import { Header, PageTitle, TopBanner } from "@/components";
import styles from '@/styles/map.module.css';
import { useEffect, useRef } from "react";

const bannerImage = {
  src: require('@/public/images/explore.jpg'),
  alt: 'banner'
}

const Map = () => {
  const map = useRef<Element | any>(null);

  useEffect(() => {
    const location: { latitude: number, longtitude: number } = {
      latitude: 37.57360,
      longtitude: 127.00450
    }

    map.current = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(location.latitude - 0.001, location.longtitude),
      zoom: 16
    })

    new naver.maps.Marker({
      position: new naver.maps.LatLng(location.latitude, location.longtitude),
      map: map.current
    })
  }, []);

  return (
    <>
      <Header />
      <TopBanner bannerImage={bannerImage} title="샘플 텍스트" subTitle="부제목" />
      <PageTitle title="오시는 길" />
      <div className={`${styles.mapBackground}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.mapWrapper}`}>
            <div id="map" className={`${styles.map}`} />
            <div className={`${styles.mapCover}`} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Map;