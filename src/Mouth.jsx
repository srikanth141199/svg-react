import React from 'react'
import { arc } from 'd3-shape';

const Mouth = ({mouthRadius,mouthWidth}) => {
    const mouth = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius+mouthWidth)
    .startAngle(Math.PI/2)
    .endAngle(3*(Math.PI/2));

  return (
    <path d={mouth()}/>
  )
}

export default Mouth