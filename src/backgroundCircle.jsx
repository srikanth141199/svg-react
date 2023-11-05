import React from 'react';
import { arc } from 'd3-shape';

const BackgroundCircle =({radius,strokeWidth})=>(
    <circle r={radius} fill='yellow' stroke='black' strokeWidth={strokeWidth}></circle>
  )

export default BackgroundCircle