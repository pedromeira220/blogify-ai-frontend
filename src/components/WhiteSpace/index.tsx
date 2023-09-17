import React from 'react'

type WhiteSpaceProps = {
  size: number
}

export const WhiteSpace: React.FC<WhiteSpaceProps> = ({ size }) => {
  return (
    <div
      style={{
        paddingBottom: size,
      }}
    />
  )
}
