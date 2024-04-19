import { ReactNode, useEffect, useState } from 'react'

interface sectionProps {
  children?: ReactNode
  className?: string
  padding?: number
  gray?: boolean
}

const section = (props: sectionProps) => {
  const [colorAttribute, setColorAttribute] = useState<string>('none');

  useEffect(() => {
    // let timeoutId: NodeJS.Timeout;
    // const handleResize = () => {
    //   clearTimeout(timeoutId);

    //   timeoutId = setTimeout(() => {
    //     let padding = props.padding || 0;
    
    //     if (window.innerWidth <= 767) padding /= 2;
    //     setPaddingAttribute(`${padding}px 20px`);
    //   }, 100);
    // }

    // handleResize();
    // window.addEventListener('resize', handleResize);

    const color = 'rgba(0, 0, 0, 0.05)';

    if (props.gray) {
      setColorAttribute(color);
    }
  }, [])

  return (
    <div
      className={`${props.className}`}
      style={{
        padding: props.padding,
        backgroundColor: colorAttribute,
      }}
    >
      { props.children }
    </div>
  )
}

export default section