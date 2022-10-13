import React from 'react'

const Title = ({addClass,children}) => {
  return (
    <span className={`text-7xl font-playfair font-bold ${addClass}`}>{children}</span>
  )
}

export default Title