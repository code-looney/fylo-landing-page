import React, {useState} from 'react';
import Container from './Container';
import Title from './Title';
import Sub from './Paragraph';
import Button from './Button';
import Input from './Input';

const Newsletter = (props) => {   
    const { className } = props;


  return (
    <Container className='bg-body w-full flex justify-center'>
        <Container className='w-96 md:w-[800px] bg-intro text-white flex flex-col gap-4 items-center text-center px-5 py-11 rounded-lg shadow-lg translate-y-[200px] md:translate-y-[115px]'>
            <Container>
                <Title className='text-[21px] md:text-[31px] font-medium'>Get early access today</Title>
            </Container>
            <Container>
                <Sub className='text-[16px] font-thin'>It only takes a minute to sign up and our free starter tier is extremely generous. If <br className='md:hidden' /> you have any <br className='md:block hidden' /> questions, our support team <br className='md:hidden' /> would be happy to help you.</Sub>
            </Container>
            <Container className="md:flex md:flex-row flex flex-col gap-6 pt-5 items-center">
                <Container className='flex flex-col'>
                        <Input className='w-80 md:w-[420px] h-11 font-thin rounded-full text-[12px] pl-8 text-black' placeHolder='email@example.com' />
                </Container>
                <Container>
                    <Button className='w-80 md:w-[200px] h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Get Started For Free</Button>
                </Container>
            </Container>
        </Container>
    </Container>
  )
}

export default Newsletter