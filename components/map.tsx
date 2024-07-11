import style from '@/styles/components/map/map.module.css'
import animation from '@/styles/components/map/animation.module.css'
import { Section } from '.'
import { useEffect, useRef, useState } from 'react'

const map = () => {
  const map = useRef<Element | any>(null);

  const [isToggledSwitch, setIsToggledSwitch] = useState<boolean>(false);

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
  }, [])

  return (
    <Section className={`flex justifyCenter`} gray>
      <div className={`relative flex limitWidth maxWidth`}>
        <div className={`maxWidth ${style.map}`} id='map' />
        <div className={`absolute maxWidth maxHeight flex justifyCenter alignCenter ${style.mapCover} ${isToggledSwitch ? animation.mapCoverFadeOut : animation.mapCoverFadeIn}`}>
          <h1 className={`title colorWhite`}>locked</h1>
        </div>
        <div className={`absolute flex mobileFlexColumn ${style.optionContainer}`}>
          <div className={`flex alignCenter ${style.information}`}>
            <p className={`text`}>서울특별시 종로구 김상옥로 59, 한아빌딩 3층</p>
          </div>
          <div className={`pointer flex alignCenter ${style.switchBackground} ${isToggledSwitch && style.toggledSwitchBackground}`} onClick={() => setIsToggledSwitch(!isToggledSwitch)}>
            <div className={`${style.switchSlider} ${isToggledSwitch && style.toggledSwitchSlider}`} />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default map