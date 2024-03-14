import React from 'react'
import Title from './Title';
import Sub from './Paragraph';
import Icon from './Icon';
import Container from './Container';
const Cards = () => {

  return (
    <Container>
            <Container className='bg-body md:w-full flex flex-col m-auto md:flex md:flex-row md:gap-x-[0px] gap-[100px] text-center pt-[200px] text-white'>
              <Container className='flex justify-end flex-col gap-2'>
                  <Container className='flex justify-center pb-7'>
                    <Icon iconURL='src/images/icon-access-anywhere.svg' />
                  </Container>
                  <Title className='text-[21px] md:text-[24px] font-bold md:font-medium' >Access your files, anywhere</Title>
                  <Sub className=' font-thin md:text-[16px]' >The ability to use a smartphone, tablet, or <br className='block md:hidden' /> computer <br className='md:block hidden' /> to access your account means your<br className='block md:hidden' /> files follow you<br className='md:block hidden' /> everywhere.</Sub>
              </Container>
              <Container className='flex flex-col gap-2'>
                  <Container className='flex justify-center pb-7'>
                    <Icon iconURL='src/images/icon-collaboration.svg' />
                  </Container>
                  <Title className='text-[21px] md:text-[24px] font-bold md:font-medium' >Real-time collaboration</Title>
                  <Sub className=' font-thin md:text-[16px]' >Securely share files and folders with friends, <br className='block md:hidden' /> family and<br className='md:block hidden' /> colleagues for live collaboration. No <br className='block md:hidden' /> email attachments<br className='md:block hidden' /> required.</Sub>
              </Container>
              <Container className='flex flex-col gap-2'>
                  <Container className='flex justify-center pb-7'>
                    <Icon iconURL='src/images/icon-security.svg' />
                  </Container>
                  <Title className='text-[21px] md:text-[20px] font-bold md:font-medium' >Security you can trust</Title>
                  <Sub className=' font-thin md:text-[16px]' >2-factor authentication and user-controlled <br className='block md:hidden' /> encryption are<br className='md:block hidden' /> just a couple of the security<br className='block md:hidden' /> features we allow to help<br className='md:block hidden' /> secure your files.</Sub>
              </Container>
              <Container className='flex flex-col gap-2'>
                  <Container className='flex justify-center pb-7'>
                    <Icon iconURL='src/images/icon-any-file.svg' />
                  </Container>
                  <Title className='text-[21px] md:text-[25px] font-bold md:font-medium' >Store any type of file</Title>
                  <Sub className=' font-thin md:text-[16px]' >Whether you're sharing holidays photos or work<br className='md:block hidden' /> <br className='block md:hidden' /> documents, Fylo has you covered allowing for all<br className='block md:hidden' /> file<br className='md:block hidden' /> types to be securely stored and shared.</Sub>
              </Container>
            </Container>
    </Container>
  )
}

export default Cards