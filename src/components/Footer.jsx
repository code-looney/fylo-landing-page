import React from 'react';
import Container from './Container';
import Paragraph from './Paragraph';
import Logo from './Logo'
import Icon from './Icon';
import Link from './Link';
import Socials from './Socials';

const Footer = () => {
  return (
    <Container className='bg-sec text-white h-screen md:h-[400px] flex flex-col justify-center items-center'>
      <Container className='outline md:w-full '>
        <Container className='w-96 md:w-full md:justify-around flex flex-col md:flex-row gap-10 outline'>
          <Container className='md:absolute'>
            <Logo className='w-40' />
          </Container>
          <Container className='flex gap-5 place-items-start'>
            <Container className='pt-[5px]'>
              <Icon iconClassName='w-[15px] md:w-[8px]' iconURL='src/images/icon-location.svg' />
            </Container>
            <Paragraph className='font-thin'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore <br /> et dolore magna aliqu</Paragraph>
          </Container>
          <Container className='flex flex-col gap-5'>
            <Container className="flex gap-5">
              <Container className='pt-[5px]'>
                <Icon iconClassName='w-[15px] md:w-[8px]' iconURL='src/images/icon-phone.svg' />
              </Container>
                <Paragraph>+1-543-123-4567</Paragraph>
            </Container>
            <Container className="flex gap-5">
              <Container className='pt-[5px]'>
                <Icon iconClassName='w-[17px] md:w-[8px]' iconURL='src/images/icon-email.svg' />
              </Container>
                <Paragraph>example@fylo.com</Paragraph>
              </Container>
            </Container>
          <Container className='flex flex-col gap-3 font-thin'>
            <Link className='hover:font-medium' href='#'>About Us</Link>
            <Link className='hover:font-medium' href='#'>Jobs</Link>
            <Link className='hover:font-medium' href='#'>Press</Link>
            <Link className='hover:font-medium' href='#'>Blog</Link>
          </Container>
          <Container className='flex flex-col gap-3 font-thin'>
            <Link className='hover:font-medium' href='#'>Contact Us</Link>
            <Link className='hover:font-medium' href='#'>Terms</Link>
            <Link className='hover:font-medium' href='#'>Privacy</Link>
          </Container>
          <Container className='flex h-32 items-end md:items-start justify-center'>
          <Socials socialClassName='flex gap-3' />
        </Container>
        </Container>
      </Container>
    </Container>
  )
}

export default Footer