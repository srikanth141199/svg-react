import { useState } from 'react'
import './App.css'

function App() {

  const width = 960;
  const height = 500;
  const stroke_width = 10;
  const centerx = 120;
  const centery =  70;
  const eyeRadius = 50;

  return (
    <>
    <svg width={width} height={height}>
      <circle cx={width/2} cy={height/2} r={(height/2)-stroke_width/2} fill='yellow' stroke='black' strokeWidth={stroke_width}></circle>
      <circle cx={width/2 - centerx} cy={height/2 - centery} r={eyeRadius}></circle>
      <circle cx={width/2 + centerx} cy={height/2 - centery} r={eyeRadius}></circle>
    </svg>
    </>
  )
}

export default App
