import style from '@/styles/components/talk/talk.module.css'
import { useEffect, useState } from 'react'

type messageAttribute = string;
type userAttribute = 'left' | 'right';

const chat = (message: messageAttribute, user: userAttribute) => {
  const [text, setText] = useState<string>('');

  useEffect(() => {
    setText(message);
  }, [message])

  return (
    <div className={`${style.chat}`} style={user === 'right' ? {'justifyContent': 'flex-end'} : {}}>
      <p className={`pcText`}>{ text }</p>
    </div>
  )
}

const talk = () => {
  interface chatAttributes {
    message: messageAttribute
    user: userAttribute
  }

  const chatting: Array<chatAttributes> = new Array(
    {
      message: '대화형 질문\n여러줄도 가능합니다.',
      user: 'right'
    },
    {
      message: '이곳에서 답변을 합니다. 엄청나게 긴 메세지를 입력할 경우, 자동으로 줄넘김 처리됩니다.',
      user: 'left'
    },
    {
      message: '한 쪽으로 여러개도 가능합니다.',
      user: 'left'
    }
  )

  return (
    <>
      <div className={`${style.background}`}>
        <div className={`${style.mobile}`}>
          <div className={`${style.gradation}`}>
            <div />
            <div />
          </div>
          <div className={`${style.display}`}>
            {
              chatting.map((text, index) => (
                <div key={index}>
                  { chat(text.message, text.user) }
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default talk;