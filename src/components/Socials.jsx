import React from 'react';
import Container from './Container';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Socials = (props) => {
    const { socialClassName } = props; 
  return (
    <Container className={socialClassName}>
        <Container className='border hover:border-sub hover:text-sub p-2 rounded-full cursor-pointer'>
            <FaFacebookF />
        </Container>
        <Container className='border hover:border-sub hover:text-sub p-2 rounded-full cursor-pointer'>
            <FaTwitter />
        </Container>
        <Container className='border hover:border-sub hover:text-sub p-2 rounded-full cursor-pointer'>
            <FaInstagram />
        </Container>
    </Container>
  )
}

export default Socials