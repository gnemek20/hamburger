import style from '@/styles/components/request/request.module.css'
import animation from '@/styles/components/request/animation.module.css'
import { AdditionalText, Dialog, Section } from '.'
import { ChangeEvent, useEffect, useState } from 'react'
import { File } from 'buffer'
import Image from 'next/image'

const request = () => {
  const fileDeleteIcon = {
    src: require('@/public/icons/delete.svg'),
    alt: 'fileDeleteIcon'
  }

  type fileType = {
    name: string
    path: string
  }

  type formType = {
    name: string
    contact: string
    detail: string
    files: Array<fileType>
  }

  const [name, setName] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [detail, setDetail] = useState<string>('');
  const [files, setFiles] = useState<Array<File>>([]);

  const [disabledSubmit, setDisabledSubmit] = useState<boolean>(true);

  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [dialogLoading, setDialogLoading] = useState<boolean>(false);
  
  const [alreadyPosted, setAlreadyPosted] = useState<boolean>(false);
  const [completedPost, setCompletedPost] = useState<boolean>(false);
  const [postedRequest, setPostedRequest] = useState<boolean>(false);

  let timeoutId: NodeJS.Timeout;
  const inputText = (target: 'name' | 'contact' | 'detail', value: string) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      if (target === 'name') setName(value);
      else if (target === 'contact') setContact(value);
      else if (target === 'detail') setDetail(value);
    }, 100)
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

  const activeDialog = () => {
    if (disabledSubmit || showDialog) return;

    setShowDialog(true);
  }

  const postRequest = async () => {
    if (dialogLoading) return;

    setDialogLoading(true);

    let base64Files: Array<fileType> = [];

    const fileToBase64Promise = files.map((file) => {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();

        reader.readAsDataURL(file as Blob);
        reader.onload = () => {
          const base64 = reader.result;

          if (base64) {
            base64Files.push({
              name: file.name,
              path: base64.toString()
            });

            resolve(true);
          }
        }
      })
    })

    await Promise.all(fileToBase64Promise);

    let posted: boolean;

    try {
      const formData: formType = {
        name: name,
        contact: contact,
        detail: detail,
        files: base64Files,
      }

      await fetch('https://backburger.vercel.app/postRequest', {
        method: 'post',
        body: JSON.stringify(formData),
        mode: 'cors',
        headers: {'Content-Type': 'application/json'}
      })
      
      posted = true;
    }
    catch (Exception) {
      posted = false;
    }

    setDialogLoading(false);
    setCompletedPost(true);

    setPostedRequest(posted);
    setAlreadyPosted(posted);
  }

  const closeDialog = () => {
    setCompletedPost(false);
    setShowDialog(false);
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
            <textarea className={`${style.formTextarea}`} rows={10} spellCheck={false} inputMode="email" onChange={(event) => setTimeout(() => inputText('detail', event.target.value))} />
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
            <button className={`pointer ${style.formSubmit} ${disabledSubmit && style.disabledFormSubmit}`} onClick={activeDialog}>제출</button>
            <Dialog
              className={`flex flexColumn alignCenter textCenter maxWidth ${completedPost ? style.postCompleteDialog : style.finalCheckDialog}`}
              active={showDialog}
              loading={dialogLoading}
            >
              {
                completedPost ? (
                  <>
                    {
                      postedRequest ? (
                        <>
                          <p className={`title`}>등록되었습니다.</p>
                          <p className={`text`}>영업일 기준 이틀 내로<br />기재해주신 연락처로 연락드리겠습니다.</p>
                        </>
                      ) : (
                        <>
                          <p className={`title`}>등록에 실패했습니다.</p>
                          <p className={`text`}>잠시 후 다시 시도해주세요.</p>
                        </>
                      )
                    }
                    <div className={`flex justifyCenter maxWidth ${style.dialogButtonContainer} ${style.dialogCloseButtonContainer}`}>
                      <button className={`mobileText pointer`} onClick={closeDialog}>닫기</button>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      { alreadyPosted ?
                        <p className={`pcText`}>등록된 주문이 있습니다.<br />한 번 더 제출하시겠습니까?</p>
                        :
                        <p className={`pcText`}>제출하시겠습니까?</p>
                      }
                    </div>
                    <div className={`flex justifyCenter maxWidth ${style.dialogButtonContainer} ${style.dialogChoiceButtonContainer}`}>
                      <button className={`mobileText colorWhite pointer`} onClick={postRequest}>네</button>
                      <button className={`mobileText pointer`} onClick={() => setShowDialog(false)}>아니오</button>
                    </div>
                  </>
                )
              }
            </Dialog>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default request