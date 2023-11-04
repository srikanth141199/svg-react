import { useState } from 'react'
import './App.css'
import { arc } from 'd3-shape';

function App() {

  const width = 960;
  const height = 500;
  const stroke_width = 10;
  const centerX = width/2;
  const centerY = height/2;
  const eyeOffsetX = 120;
  const eyeOffsetY =  80;
  const eyeRadius = 50;
  const mouthRadius =160;
  const mouthWidth = 20;

  const mouth = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius+mouthWidth)
    .startAngle(Math.PI/2)
    .endAngle(3*(Math.PI/2));

  return (
    <>
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        <circle r={centerY - stroke_width/2} fill='yellow' stroke='black' strokeWidth={stroke_width}></circle>
        <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius}></circle>
        <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius}></circle>
        <path d={mouth()}/>
      </g>
    </svg>
    </>
  )
}

export default App
