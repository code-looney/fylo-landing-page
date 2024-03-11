import React from 'react';
import Container from './Container';
import Sub from './Sub';
import Icon from './Icon';
import Title from './Title';

const Testimonials = () => {
  return (
    <Container className='bg-main relative'>
    <Container className='w-3/4 mx-auto text-white relative z-40'>
    <Icon className='relative translate-y-[10px] translate-x-[10px]' iconURL='src/images/bg-quotes.png' />
        <Container className='flex md:flex-row relative flex-col gap-6 outline'>
            <Container className='bg-test flex flex-col p-7 gap-5 rounded'>
                <Icon />
                <Container><Sub className='font-thin md:text-[15px] text-[12px] leading-6'> Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
              become a well-oiled collaboration machine.</Sub></Container>
                <Container className='flex gap-3'>
                    <Icon className='w-8' iconClassName='rounded-full' iconURL='src/images/profile-1.jpg' />
                    <Container>
                        <Title className='text-[12px] font-bold tracking-widest'>Satish Patel</Title>
                        <Sub className='text-[10px] font-thin tracking-widest'>Founder & CEO, Huddle</Sub>
                    </Container>
                </Container>
            </Container>            
            <Container className='bg-test flex flex-col p-7 gap-5 rounded'>
                <Icon />
                <Container><Sub className='font-thin md:text-[15px] text-[12px] leading-6'> Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
              become a well-oiled collaboration machine.</Sub></Container>
                <Container className='flex gap-3'>
                    <Icon className='w-8' iconClassName='rounded-full' iconURL='src/images/profile-2.jpg' />
                    <Container>
                        <Title className='text-[12px] font-bold tracking-widest'>Bruce McKenzie</Title>
                        <Sub className='text-[10px] font-thin tracking-widest'>Founder & CEO, Huddle</Sub>
                    </Container>
                </Container>
            </Container>
            <Container className='bg-test flex flex-col p-7 gap-5 rounded'>
                <Icon />
                <Container><Sub className='font-thin md:text-[15px] text-[12px] leading-6'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
              become a well-oiled collaboration machine.</Sub></Container>
                <Container className='flex gap-3'>
                    <Icon className='w-8' iconClassName='rounded-full' iconURL='src/images/profile-3.jpg' />
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