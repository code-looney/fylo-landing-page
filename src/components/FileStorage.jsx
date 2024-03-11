import React from 'react';
import Title from './Title';
import Sub from './Paragraph';
import FileStorageImage from './FileStorageImage';
import Container from './Container';
import Icon from './Icon';
import Link from './Link';

const FileStorage = () => {
  return (
    <div className='text-white flex flex-col md:flex-row gap-[60px] h-[1000px] md:h-[800px] items-center justify-center px-8'>
        <Container className='md:flex md:w-full md:justify-center md:flex-row flex-col items-center md:gap-14' >
        <FileStorageImage storageClassName='md:w-[700px]' />
          <Container className='flex flex-col gap-4 pt-[100px] md:pt-0'>
              <Title className='font-bold text-[22px] md:text-[42px]'> Stay productive,<br className='md:block hidden' /> wherever you are</Title>
              <Sub className='text-[14px] md:text-[18px]'>Never let location be an issue when accessing your files. Fylo has you<br className='md:block hidden' /> covered for all of your file storage needs.</Sub>
              <Sub className='text-[14px] md:text-[18px]'>  Securely share files and folders with friends, family and colleagues for live<br className='md:block hidden' /> collaboration. No email attachments required.</Sub>
                  <Container className='w-[145px] md:w-[135px] flex items-center gap-1 border-b-[1px] border-b-sub pb-[5px]'>
                      <Link className='text-sub font-thin text-[14px] md:text-[13px]' >See how Fylo works</Link>
                      <Icon iconURL='src/images/icon-arrow.svg' />
                  </Container>
          </Container>
        </Container>
    </div>
  )
}

export default FileStorage