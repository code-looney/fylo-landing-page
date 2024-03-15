import React from 'react';
import Container from './Container';

const BackgroundCurve = (props) => {
  return (
    <>
    <img className='w-full h-[160px] translate-y-[-70px] absolute z-20 md:hidden' src="src/images/bg-curvy-mobile.svg" alt="" />
    <img className='h-[450px] w-full translate-y-[-70px] absolute z-20 md:block hidden' src="src/images/bg-curvy-desktop.svg" alt="" />
    </>
  )
}

export default BackgroundCurve