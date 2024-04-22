import style from '@/styles/components/additionalText/additionalText.module.css'
import { ReactNode } from 'react'

interface additionalTextProps {
  children: ReactNode
  require?: boolean
}

const additionalText = (props: additionalTextProps) => {
  return (
    <div className={`flex additionalText`}>
      <p>{ props.children }</p>
      { props.require && <p className={`${style.star}`}>*</p> }
    </div>
  )
}

export default additionalText