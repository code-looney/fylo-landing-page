import React from 'react';
import Container from './Container';
import Sub, { Paragraph } from './Paragraph';
import Icon from './Icon';
import Title from './Title';

const Testimonials = () => {
  return (
    <Container className='bg-main pb-[500px] relative'>
    <Container className='w-3/4 mx-auto text-white relative z-40'>
    <Icon className='relative translate-y-[10px] translate-x-[10px] md:translate-x-[-10px]' iconURL='src/images/bg-quotes.png' />
        <Container className='flex md:flex-row relative flex-col gap-6'>
            <Container className='bg-test flex flex-col p-7 gap-5 rounded'>
                <Container><Paragraph className='font-thin md:text-[15px] text-[12px] leading-6'> Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
              become a well-oiled collaboration machine.</Paragraph></Container>
                <Container className='flex gap-3'>
                    <Container className='w-8'>
                        <Icon iconClassName='rounded-full' iconURL='src/images/profile-1.jpg' />
                    </Container>
                    <Container>
                        <Title className='text-[12px] font-bold tracking-widest'>Satish Patel</Title>
                        <Sub className='text-[10px] font-thin tracking-widest'>Founder & CEO, Huddle</Sub>
                    </Container>
                </Container>
            </Container>            
            <Container className='bg-test flex flex-col p-7 gap-5 rounded'>
                <Container><Paragraph className='font-thin md:text-[15px] text-[12px] leading-6'> Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
              become a well-oiled collaboration machine.</Paragraph></Container>
                <Container className='flex gap-3'>
                    <Container className='w-8'>
                        <Icon iconClassName='rounded-full' iconURL='src/images/profile-2.jpg' />
                    </Container>
                    <Container>
                        <Title className='text-[12px] font-bold tracking-widest'>Bruce McKenzie</Title>
                        <Sub className='text-[10px] font-thin tracking-widest'>Founder & CEO, Huddle</Sub>
                    </Container>
                </Container>
            </Container>
            <Container className='bg-test flex flex-col p-7 gap-5 rounded'>
                <Container><Paragraph className='font-thin md:text-[15px] text-[12px] leading-6'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
              become a well-oiled collaboration machine.</Paragraph></Container>
                <Container className='flex gap-3'>
                    <Container className='w-8'>
                        <Icon iconClassName='rounded-full' iconURL='src/images/profile-3.jpg' />
                    </Container>
                    <Container>
                        <Title className='text-[12px] font-bold tracking-widest'>Iva Boyd</Title>
                        <Sub className='text-[10px] font-thin tracking-widest'>Founder & CEO, Huddle</Sub>
                    </Container>
                </Container>
            </Container>
        </Container>
    </Container>
    </Container>
  )

}

export default Testimonials