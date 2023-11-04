import { useState } from 'react'
import './App.css'
import { arc } from 'd3-shape';

function App() {

  const width = 960;
  const height = 500;
  const stroke_width = 10;
  const centerx = 120;
  const centery =  70;
  const eyeRadius = 50;

  const mouth = arc()
    .innerRadius(0)
    .outerRadius(100)
    .startAngle(0)
    .endAngle(Math.PI / 2);

  return (
    <>
    <svg width={width} height={height}>
      <g transform={'translate($(centerx),$(centery))'}>
        <circle r={centery - stroke_width/2} fill='yellow' stroke='black' strokeWidth={stroke_width}></circle>
        <circle cx={- centerx} cy={- centery} r={eyeRadius}></circle>
        <circle cx={centerx} cy={- centery} r={eyeRadius}></circle>
        <path d={mouth()}/>
      </g>
    </svg>
    </>
  )
}

export default App
