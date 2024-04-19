import style from '@/styles/components/section/section.module.css'
import { ReactNode } from 'react'

interface sectionProps {
  children?: ReactNode
  className?: string
  padding?: number
  gray?: boolean
}

const section = (props: sectionProps) => {
  return (
    <div
      className={`${props.className} ${props.gray && style.gray}`}
      style={{
        paddingTop: props.padding,
        paddingBottom: props.padding
      }}
    >
      { props.children }
    </div>
  )
}

export default section