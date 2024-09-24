import style from '@/styles/components/zipperStructure/zipperStructure.module.css'
import { Banner, Offset } from '.'
import { RefObject, useEffect, useState } from 'react'

const bannerImage = {
  src: require('@/public/images/gear.jpg'),
  alt: 'bannerImage'
}

interface stackAttribute {
  observed: boolean
  cardArray: Array<string>
}

interface zipperStructureProps {
  elementRef: RefObject<HTMLDivElement>
  startAnimation: boolean
}

const Stack = ({cardArray, observed}: stackAttribute) => {
  const [selectedCard, setSelectedCard] = useState<string>('');

  const compareToSelectedCard = (item: string) => {
    if (selectedCard === item) return true;
    else return false;
  }

  const changeSelectedCard = (item: string) => {
    setSelectedCard(item);
  }

  useEffect(() => {
    if (observed) {
      setSelectedCard(cardArray[0]);
    }
  }, [cardArray, observed])

  return (
    <div className={`${style.stack}`}>
      {
        cardArray.map((item, index) => (
          <div className={`${style.card} ${compareToSelectedCard(item) && style.selected}`} onClick={() => changeSelectedCard(item)} key={index}>
            <p className={`${compareToSelectedCard(item) ? 'text' : 'mobileText'}`}>{ item }</p>
          </div>
        ))
      }
    </div>
  )
}

const zipperStructure = ({elementRef, startAnimation}: zipperStructureProps) => {
  const array = new Array('Sample1', 'Sample2', 'Sample3', 'Sample4');

  return (
    <>
      <Offset size={75} />
      <Banner image={bannerImage} title='지퍼의 다양성' subTitle='variety of zipper' />
      <Offset size={45} />
      <div ref={elementRef} className={`${style.zipperStructure}`}>
        <div className={`limitWidth ${style.list}`}>
          <div>
            <Stack observed={startAnimation} cardArray={array} />
          </div>
          <div>
            <Stack observed={startAnimation} cardArray={array} />
          </div>
          <div>
            <Stack observed={startAnimation} cardArray={array} />
          </div>
        </div>
      </div>
    </>
  )
}

export default zipperStructure;