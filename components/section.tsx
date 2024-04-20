import style from '@/styles/components/section/section.module.css'
import { ReactNode, useEffect, useState } from 'react'

interface sectionProps {
  children?: ReactNode
  className?: string
  gray?: boolean
}

const section = (props: sectionProps) => {
  return (
    <div className={`${props.className} ${props.gray && style.gray} ${style.section}`}>
      { props.children }
    </div>
  )
}

export default section