interface offsetAttributes {
  size: number
}

const offset = ({ size }: offsetAttributes) => {
  return (
    <div style={{'marginTop': `${size}px`}} />
  )
}

export default offset;