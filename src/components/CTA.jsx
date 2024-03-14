import React from 'react';
import Title from './Title';
import Sub from './Paragraph';
import Button from './Button';
import Container from './Container';

const CTA = (props) => {
  console.log(props)
  return (
    <Container className='flex h-[300px] bg-body md:bg-transparent translate-y-[90px] gap-5 text-white relative z-40 md:z-30'>
        <Container className='w-full flex flex-col gap-5 text-center translate-y-[-80px] '>
          <Title className=' text-[30px] md:text-[35px] font-bold'>All your files in one secure
          <br className='block md:hidden'/>location, <br className='hidden md:block'/>accessible
          <br className='block md:hidden'/> anywhere.</Title>
          <Sub className='text-[17px] md:text-[16px] font-light'>Fylo stores all your most important files in<br className='md:hidden block'/> one secure location.<br className='hidden md:block'/> Access them wherever<br className='md:hidden block'/>you need, share and collaborate with<br className='hidden md:block'/> friends<br className='md:hidden block'/> family, and co-workers.</Sub>
          <Button className='w-3/4 h-14 md:w-1/5 rounded-full bg-gradient-to-r from-cyan-500 
          hover:from-[#f0f0f0ce] to-blue-500 hover:to-[#f0f0f0ce] text-white font-bold'>Get Started</Button>
        </Container>
    </Container>
  )
}

export default CTA