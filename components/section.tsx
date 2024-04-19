import { ReactNode } from 'react'

interface sectionProps {
  children?: ReactNode
  className?: string
  padding?: number
}

const section = (props: sectionProps) => {
  return (
    <div
      className={`${props.className}`}
      style={{paddingTop: props.padding, paddingBottom: props.padding}}
    >
      { props.children }
    </div>
  )
}

export default section