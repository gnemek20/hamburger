import style from '@/styles/components/footer/footer.module.css'

const footer = () => {
  return (
    <div className={`flex justifyCenter ${style.footer}`}>
      <div className={`flex flexColumn limitWidth maxWidth ${style.container}`}>
        <div>
          <p className={`mobileText colorWhite`}>대양ING</p>
          <p className={`mobileText colorWhite`}>서울특별시 종로구 김상옥로 59, 한아빌딩 3층</p>
        </div>
        <div className={`flex mobileFlexColumn ${style.information}`}>
          <div>
            <p className={`mobileText colorWhite`}>사업자번호: <a className={`colorWhite`}>869-81-02857</a></p>
            <p className={`mobileText colorWhite`}>도매 및 소매, 제조업: ZIPPER 외 의류 부자재</p>
          </div>
          <div>
            <p className={`mobileText colorWhite`}>전화번호: <a className={`colorWhite`}>010-3744-3084</a></p>
            <p className={`mobileText colorWhite`}>이메일: example@example.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer