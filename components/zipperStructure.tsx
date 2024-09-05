import style from '@/styles/components/zipperStructure/zipperStructure.module.css'

const backgroundImage = require('@/public/images/blueprint.jpg');

const zipperStructure = () => {
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
        <div>

        </div>
      </div>
    </div>
  )
}

export default zipperStructure;