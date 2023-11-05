import React from 'react'

const Eyes = ({eyeOffsetX, eyeOffsetY, eyeRadius}) => {
  return (
    <>
        <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius}></circle>
        <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius}></circle>
    </>
  )
}

export default Eyes