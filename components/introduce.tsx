import style from '@/styles/components/introduce/introduce.module.css'
import animation from '@/styles/components/introduce/animation.module.css'
import { Section } from '.'

const introduce = () => {
  return (
    <Section className={`flex justifyCenter alignCenter`} padding={200} gray>
      <h1 className={`title`}>샘플 텍스트</h1>
    </Section>
  )
}

export default introduce