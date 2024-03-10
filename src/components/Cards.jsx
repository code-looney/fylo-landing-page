import React from 'react'
import Title from './Title';
import Sub from './Sub';
import Icon from './Icon';

const Cards = () => {

  return (
    <div className='bg-main'>
            <div className='flex flex-col m-auto md:grid md:grid-rows-2 md:grid-flow-col md:gap-x-[0px] md:w-5/6 gap-[100px] text-center pt-[200px] text-white'>
              <div className='flex justify-end flex-col gap-2'>
                  <Icon className='flex justify-center pb-7' iconURL='src/images/icon-access-anywhere.svg' />
                  <Title className='text-[21px] md:text-[20px] font-bold md:font-medium' >Access your files, anywhere</Title>
                  <Sub className=' font-thin md:text-[14px]' >The ability to use a smartphone, tablet, or <br className='block md:hidden' /> computer <br className='md:block hidden' /> to access your account means your<br className='block md:hidden' /> files follow you<br className='md:block hidden' /> everywhere.</Sub>
              </div>
              <div className='flex flex-col gap-2'>
                  <Icon className='flex justify-center pb-7' iconURL='src/images/icon-collaboration.svg' />
                  <Title className='text-[21px] md:text-[20px] font-bold md:font-medium' >Real-time collaboration</Title>
                  <Sub className=' font-thin md:text-[14px]' >Securely share files and folders with friends, <br className='block md:hidden' /> family and<br className='md:block hidden' /> colleagues for live collaboration. No <br className='block md:hidden' /> email attachments<br className='md:block hidden' /> required.</Sub>
              </div>
              <div className='flex flex-col gap-2'>
                  <Icon className='flex justify-center pb-7' iconURL='src/images/icon-security.svg' />
                  <Title className='text-[21px] md:text-[20px] font-bold md:font-medium' >Security you can trust</Title>
                  <Sub className=' font-thin md:text-[14px]' >2-factor authentication and user-controlled <br className='block md:hidden' /> encryption are<br className='md:block hidden' /> just a couple of the security<br className='block md:hidden' /> features we allow to help<br className='md:block hidden' /> secure your files.</Sub>
              </div>
              <div className='flex flex-col gap-2'>
                  <Icon className='flex justify-center pb-7' iconURL='src/images/icon-any-file.svg' />
                  <Title className='text-[21px] md:text-[20px] font-bold md:font-medium' >Store any type of file</Title>
                  <Sub className=' font-thin md:text-[14px]' >Whether you're sharing holidays photos or work<br className='md:block hidden' /> <br className='block md:hidden' /> documents, Fylo has you covered allowing for all<br className='block md:hidden' /> file<br className='md:block hidden' /> types to be securely stored and shared.</Sub>
              </div>
            </div>
    </div>
  )
}

export default Cards