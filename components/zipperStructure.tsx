import style from '@/styles/components/zipperStructure/zipperStructure.module.css'
import { Banner, Offset } from '.'
import { RefObject, useEffect, useState } from 'react'
import Image from 'next/image'

const bannerImage = {
  src: require('@/public/images/gear.jpg'),
  alt: 'bannerImage'
}

interface cardAttribute {
  name: string
  image: typeof bannerImage
}

interface stackAttribute {
  observed: boolean
  cardArray: Array<cardAttribute>
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
      setSelectedCard(cardArray[0].name);
    }
  }, [cardArray, observed])

  return (
    <div className={`${style.stack}`}>
      {
        cardArray.map((card, index) => (
          <div className={`${style.card} ${compareToSelectedCard(card.name) && style.selected}`} onClick={() => changeSelectedCard(card.name)} key={index}>
            <div className={`${style.cardImage}`}>
              <Image src={card.image.src} alt={card.image.alt} />
            </div>
            <p className={`${compareToSelectedCard(card.name) ? 'text' : 'mobileText'}`}>{ card.name }</p>
          </div>
        ))
      }
    </div>
  )
}

const zipperStructure = ({elementRef, startAnimation}: zipperStructureProps) => {
  const metalZipperImage = {
    src: require('@/public/images/metalZipper.jpg'),
    alt: 'metalZipper'
  }
  const plasticZipperImage = {
    src: require('@/public/images/plasticZipper.jpg'),
    alt: 'plasticZipper'
  }

  const metalArray: Array<cardAttribute> = [
    {
      name: '메탈',
      image: metalZipperImage
    },
    {
      name: 'metal',
      image: plasticZipperImage
    },
    {
      name: 'Sample3',
      image: plasticZipperImage
    },
    {
      name: 'Sample4',
      image: plasticZipperImage
    }
  ]

  const plasticArray: Array<cardAttribute> = [
    {
      name: '플라스틱',
      image: metalZipperImage
    },
    {
      name: 'plastic',
      image: plasticZipperImage
    },
    {
      name: 'Sample3',
      image: plasticZipperImage
    },
    {
      name: 'Sample4',
      image: plasticZipperImage
    }
  ]

  const coilArray: Array<cardAttribute> = [
    {
      name: '코일',
      image: metalZipperImage
    },
    {
      name: 'coil',
      image: plasticZipperImage
    },
    {
      name: 'Sample3',
      image: plasticZipperImage
    },
    {
      name: 'Sample4',
      image: plasticZipperImage
    }
  ]

  return (
    <>
      <Offset size={75} />
      <Banner image={bannerImage} title='지퍼의 다양성' subTitle='variety of zipper' />
      <Offset size={45} />
      <div ref={elementRef} className={`${style.zipperStructure}`}>
        <div className={`limitWidth ${style.list}`}>
          <div>
            <Stack observed={startAnimation} cardArray={metalArray} />
          </div>
          <div>
            <Stack observed={startAnimation} cardArray={plasticArray} />
          </div>
          <div>
            <Stack observed={startAnimation} cardArray={coilArray} />
          </div>
        </div>
      </div>
    </>
  )
}

export default zipperStructure;