import style from '@/styles/components/dialog/dialog.module.css'
import animation from '@/styles/components/dialog/animation.module.css'
import { ReactNode } from 'react'

interface dialogProps {
  active: boolean
  loading?: boolean
  children: ReactNode
  className?: string
}

const dialog = (props: dialogProps) => {
  return (
    <div className={`opacityNone fixed fullWidth fullHeight flex justifyCenter alignCenter ${style.mask} ${props.active ? animation.dialogFadeIn : animation.dialogOut}`}>
      <div className={`${props.className} ${style.container}`}>
        {
          props.loading ?
          <div className={`hidden ${style.circle}`}>
            <div className={`${style.rotatingBox} ${animation.rotating}`} />
            <div className={`absolute ${style.cover}`} />
          </div>
          :
          props.children
        }
      </div>
    </div>
  )
}

export default dialog