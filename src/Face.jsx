import React from 'react';
import BackgroundCircle from './backgroundCircle';
import Eyes from './Eyes';
import Mouth from './Mouth';
import FaceContainer from './FaceContainer';

const Face = ({width,height,centerX,centerY,stroke_width,eyeOffsetX,eyeOffsetY,eyeRadius,mouthWidth,mouthRadius}) => {
  return (
    <>
        <FaceContainer width ={width} height={height} centerX={centerX} centerY ={centerY}>
            <BackgroundCircle radius ={centerY - stroke_width/2} strokeWidth={stroke_width}/>
            <Eyes eyeOffsetX ={eyeOffsetX} eyeOffsetY={eyeOffsetY} eyeRadius={eyeRadius}/>
            <Mouth mouthWidth={mouthWidth} mouthRadius={mouthRadius} />
        </FaceContainer>
    </>
  )
}

export default Face