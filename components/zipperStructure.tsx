import style from '@/styles/components/zipperStructure/zipperStructure.module.css'
import Flicking from '@egjs/react-flicking';

const zipperStructure = () => {
  const array = new Array([1, 2, 3, 4, 5, 6, 7, 8, 9])

  return (
    <div className={`flex justifyCenter ${style.zipperStructureBackground}`}>
      <div className={`limitWidth maxWidth ${style.zipperStructure}`}>
        <div className={`${style.tag}`}>
          <div>
            <p className={`mobileText`}>지퍼</p>
          </div>
          <div>
            <p className={`mobileText`}>슬라이더</p>
          </div>
          <div>
            <p className={`mobileText`}>풀러</p>
          </div>
        </div>
        <div className={`${style.flickingBackground}`}>
          <div className={`${style.shadow}`}>
            <div />
            <div />
          </div>
          <Flicking align={'center'} circular>
            {
              array[0].map((item, index) => (
                <div key={index} className={`${style.imageFrame}`}>
                  <div className={`${style.image}`}>
                    <p>{ index }</p>
                  </div>
                </div>
              ))
            }
          </Flicking>
        </div>
        <div className={`${style.description}`}>
          <p className={`text`}>이름</p>
          <div>
            <p className={`mobileText`}>이거에 대한 설명들</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default zipperStructure;