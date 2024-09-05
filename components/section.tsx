import style from '@/styles/components/section/section.module.css'
import { ReactNode, useEffect, useState } from 'react'

interface sectionProps {
  children?: ReactNode
  className?: string
  gray?: boolean
  height?: number
  padding?: string
}

const section = (props: sectionProps) => {
  return (
    <div className={`${props.className} ${props.gray && style.gray} ${style.section}`} style={{'height': `${props.height}px`, 'padding' : `${props.padding}`}}>
      { props.children }
    </div>
  )
}

export default section