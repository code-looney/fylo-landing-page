import React from 'react';
import Container from './Container';
import Title from './Title';
import Sub from './Paragraph';
import Button from './Button';
import Input from './Input';

const Newsletter = (props) => {
    const { className } = props;

  return (
    <Container className='w-full flex justify-center translate-y-[200px] md:translate-y-[100px]'>
        <Container className='w-96 md:w-[900px] bg-intro text-white flex flex-col gap-4 items-center text-center px-5 py-11 rounded-lg shadow-lg'>
            <Container>
                <Title className='text-[21px] font-medium'>Get early access today</Title>
            </Container>
            <Container>
                <Sub className='text-[16px] font-thin'>It only takes a minute to sign up and our free starter tier is extremely generous. If <br className='md:hidden' /> you have any <br className='md:block hidden' /> questions, our support team <br className='md:hidden' /> would be happy to help you.</Sub>
            </Container>
            <Container className="md:flex md:flex-row flex flex-col gap-6 pt-5">
                <Container>
                    <Input className='w-80 md:w-[500px] h-11 font-thin rounded-full text-[12px] pl-10' placeHolder='email@example.com' />
                </Container>
                <Container>
                    <Button className='w-80 md:w-[250px] h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Get Started For Free</Button>
                </Container>
            </Container>
        </Container>
    </Container>
  )
}

export default Newsletter