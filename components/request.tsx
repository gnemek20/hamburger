import style from '@/styles/components/request/request.module.css'
import animation from '@/styles/components/request/animation.module.css'
import { AdditionalText, Section } from '.'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { File } from 'buffer'
import Image from 'next/image'

const request = () => {
  const fileDeleteIcon = {
    src: require('@/public/icons/delete.svg'),
    alt: 'fileDeleteIcon'
  }

  type formType = {
    name: string
    contact: string
    detail: string
    files: Array<File>
  }

  const [name, setName] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [detail, setDetail] = useState<string>('');
  const [files, setFiles] = useState<Array<File>>([]);
  const [formData, setFormData] = useState<formType>({
    name: '',
    contact: '',
    detail: '',
    files: []
  });

  const [disabledSubmit, setDisabledSubmit] = useState<boolean>(true);

  let timeoutId: NodeJS.Timeout;
  const inputText = (target: 'name' | 'contact' | 'detail', value: string) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      if (target === 'name') setName(value);
      else if (target === 'contact') setContact(value);
      else if (target === 'detail') setDetail(value);
    }, 250)
  }

  const uploadFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = event.target.files;

    if (uploadedFiles !== null) {
      const uploadedFileList = Array.prototype.slice.call(uploadedFiles);
      setFiles([...files, ...uploadedFileList]);
      event.target.value = "";
    }
  }
  const deleteFile = (fileIndex: number) => {
    setFiles(files.filter((file, index) => index !== fileIndex));
  }

  useEffect(() => {
    if (name.length > 0 && contact.length > 0 && detail.length > 0) setDisabledSubmit(false);
    else setDisabledSubmit(true);
  }, [name, contact, detail])

  return (
    <Section className={`flex justifyCenter`} gray>
      <div className={`flex flexColumn alignCenter limitWidth maxWidth`}>
        <div className={`flex flexColumn textCenter ${style.content}`}>
          <h1 className={`title`}>주문 등록</h1>
          <div>
            <p className={`text`}>최대한 빨리 확인하여 기재해주신 연락처로 연락드리겠습니다.</p>
          </div>
        </div>
        <div className={`maxWidth ${style.divideLine}`} />
        <div className={`flex flexColumn maxWidth ${style.form}`}>
          <div>
            <AdditionalText require>이름</AdditionalText>
            <input className={`${style.formTextInput}`} type="text" spellCheck={false} onChange={(event) => setTimeout(() => inputText('name', event.target.value))} />
          </div>
          <div>
            <AdditionalText require>연락처</AdditionalText>
            <input className={`${style.formTextInput}`} type="text" spellCheck={false} onChange={(event) => setTimeout(() => inputText('contact', event.target.value))} />
          </div>
          <div>
            <AdditionalText require>내용</AdditionalText>
            <textarea className={`${style.formTextarea}`} rows={10} spellCheck={false} onChange={(event) => setTimeout(() => inputText('detail', event.target.value))} />
          </div>
          <div>
            <AdditionalText>첨부파일</AdditionalText>
            <input className={`${style.formFileInput}`} type="file" id="file" onChange={(event) => uploadFiles(event)} multiple />
            <label className={`pointer textCenter ${style.formLabel}`} htmlFor="file">파일 추가</label>
            {
              files.length > 0 && (
                <div className={`flex flexColumn ${style.uploadedFiles}`}>
                  {
                    files.map((file, index) => (
                      <div className={`flex ${style.uploadedFile}`} key={index} onClick={() => deleteFile(index)}>
                        <p className={`mobileText`}>{ file.name }</p>
                        <Image className={`${style.fileDeleteIcon}`} src={fileDeleteIcon.src} alt={fileDeleteIcon.alt} />
                      </div>
                    ))
                  }
                </div>
              )
            }
          </div>
          <div>
            <button className={`pointer ${style.formSubmit} ${disabledSubmit && style.disabledFormSubmit}`}>제출</button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default request