import React from 'react';
import Container from './Container';
import Paragraph from './Paragraph';
import Logo from './Logo'
import Icon from './Icon';
import Link from './Link';
import Socials from './Socials';

const Footer = () => {

  return (
    <Container className='bg-sec text-white h-screen flex outline'>
        <Container className='w-full flex flex-col gap-10 justify-center'>
          <Container className='w-52 flex translate-x-[20px]'>
            <Logo />
          </Container>
          <Container className='flex gap-5 pl-5'>
            <Container className='w-5 relative h-full translate-y-[8px] '>
              <Icon iconURL='src/images/icon-location.svg' />
          </Container>
            <Paragraph className='font-thin'>Lorem ipsum dolor sit amet,<br className='block md:hidden' /> consectetur adipiscing elit, sed do<br className='block md:hidden' /> eiusmod tempor incididunt ut labore<br className='block md:hidden' /> et 
              dolore magna aliqua</Paragraph>
          </Container>
          <Container className='flex flex-col gap-5 pl-5'>
              <Container className='flex gap-3 items-center'>
                <Container className='w-[15px]'>
                  <Icon iconURL='src/images/icon-phone.svg' />
                </Container>
                <Link>+1-543-123-4567</Link>
              </Container>
              <Container className='flex gap-3 items-center'>
                <Container className='w-[25px]'>
                  <Icon iconURL='src/images/icon-email.svg' />
                </Container>
                <Link>example@fylo.com</Link>
              </Container>
          </Container>
          <Container className='flex flex-col gap-10 pl-5'>
            <Container className='flex flex-col'>
                <Link href='#'>About Us</Link>
                <Link href='#'>Jobs</Link>
                <Link href='#'>Press</Link>
                <Link href='#'>Blog</Link>
          </Container>

              <Container className='flex flex-col'>
                <Link href='#'>Contact Us</Link>
                <Link href='#'>Terms</Link>
                <Link href='#'>Privacy</Link>
              </Container>
          </Container>

          <Container className='flex w- h-[150px] items-center justify-center'>
            <Socials socialClassName='flex gap-3' />
          </Container>
        </Container>
    </Container>
  )
}

export default Footer