import React from 'react';
import Container from './Container';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Socials = (props) => {
    const { socialClassName, className } = props; 
  return (
    <Container className={className}>
        <Container className='border hover:border-sub hover:text-sub p-2 rounded-full cursor-pointer'>
            <FaFacebookF className={socialClassName} />
        </Container>
        <Container className='border hover:border-sub hover:text-sub p-2 rounded-full cursor-pointer'>
            <FaTwitter className={socialClassName} />
        </Container>
        <Container className='border hover:border-sub hover:text-sub p-2 rounded-full cursor-pointer'>
            <FaInstagram className={socialClassName} />
        </Container>
    </Container>
  )
}

export default Socials