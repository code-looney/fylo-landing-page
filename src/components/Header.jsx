import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'

const Header = (props) => {
    const { className } = props;
  return (
    <header className='bg-main flex flex-wrap justify-between py-8 px-7 md:px-20'>
        <Logo className='w-24' />
        <Navbar />
    </header>
  )
}

export default Header