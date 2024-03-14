import React from 'react';
import Title from './Title';
import Sub from './Paragraph';
import Button from './Button';
import Container from './Container';

const CTA = (props) => {
  console.log(props)
  return (
    <Container className='flex bg-body translate-y-[90px] flex-col gap-5 text-center text-white relative z-30'>
        <Title className=' text-[30px] md:text-[35px] font-bold'>All your files in one secure
        <br className='block md:hidden'/>location, <br className='hidden md:block'/>accessible
        <br className='block md:hidden'/> anywhere.</Title>
        <Sub className='text-[17px] md:text-[16px] font-light'>Fylo stores all your most important files in<br className='md:hidden block'/> one secure location.<br className='hidden md:block'/> Access them wherever<br className='md:hidden block'/>you need, share and collaborate with<br className='hidden md:block'/> friends<br className='md:hidden block'/> family, and co-workers.</Sub>
        <Button className='w-3/4 h-14 md:w-1/5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold'>Get Started</Button>
    </Container>
  )
}

export default CTA