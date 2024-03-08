import React from 'react';
import Title from './Title';
import Sub from './Sub';
import Button from './Button';

const CTA = () => {
  return (
    <div className='flex flex-col gap-5 text-center'>
        <Title />
        <Sub />
        <Button className='w-3/4 h-14 md:w-1/5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold'>Get Started</Button>
    </div>
  )
}

export default CTA