import style from '@/styles/components/merit/merit.module.css'
import animation from '@/styles/components/merit/animation.module.css'
import { Section } from '.'
import { RefObject } from 'react'

interface meritProps {
  elementRef: RefObject<HTMLDivElement>
  startAnimation: boolean
}

const merit = (props: meritProps) => {
  return (
    <Section>

    </Section>
  )
}

export default merit