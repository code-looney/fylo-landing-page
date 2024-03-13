import React from 'react';
import Container from './Container';
import Paragraph from './Paragraph';
import Logo from './Logo'
import Icon from './Icon';
import Link from './Link';
import Socials from './Socials';

const Footer = () => {

  return (
    <Container className='bg-sec text-white h-[1100px] md:h-[500px] flex md:justify-center'>
        <Container className='w-full md:w-[1200px] flex items-end md:items-end'>
          <Container className='w-full md:h-[220px] flex flex-col gap-10 md:gap-[120px] md:flex-row md:justify-center outline'>
            <Container className='flex flex-col gap-10'>
              <Container className='w-52 flex translate-x-[50px] md:translate-y-[-80px] md:absolute'>
                <Logo />
              </Container>
              <Container className='flex gap-5 pl-8 md:pl-0'>
                <Container className='w-5 h-full translate-y-[8px] '>
                  <Icon iconURL='src/images/icon-location.svg' />
              </Container>
                <Paragraph className='font-thin'>Lorem ipsum dolor sit amet,
                <br className='block md:hidden' />consectetur
                <br className='hidden md:block' />adipiscing elit, sed do
                <br className='block md:hidden' />eiusmod tempor
                <br className='hidden md:block' />incididunt ut labore
                <br className='block md:hidden' />et
                  dolore magna aliqua</Paragraph>
              </Container>
            </Container>
            <Container className='flex flex-col gap-5 pl-8 md:pl-0'>
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
            <Container className='flex flex-col gap-10 md:flex-row pl-8 md:pl-0'>
              <Container className='flex flex-col gap-4'>
                  <Link href='#'>About Us</Link>
                  <Link href='#'>Jobs</Link>
                  <Link href='#'>Press</Link>
                  <Link href='#'>Blog</Link>
            </Container>
                <Container className='flex flex-col gap-4'>
                  <Link href='#'>Contact Us</Link>
                  <Link href='#'>Terms</Link>
                  <Link href='#'>Privacy</Link>
                </Container>
            </Container>
            <Container className='flex w- h-[150px] items-center md:items-start justify-center'>
              <Socials className='flex gap-3' />
            </Container>
          </Container>
        </Container>
    </Container>
  )
}

export default Footer