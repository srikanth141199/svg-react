import { useState } from 'react'
import './App.css'


import Face from './Face';
import {range} from 'd3'

const array = range(40)
const width = 160;
const height = 160;  


const App = ()=>{
  return array.map(()=> 
  <Face width ={width} height={height} 
      stroke_width = {10}
      centerX = {width/2}
      centerY = {height/2}
      eyeOffsetX = {30}
      eyeOffsetY =  {30}
      eyeRadius = {10}
      mouthRadius ={40}
      mouthWidth = {10} />
      )
}

export default App
