import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'

const Header = (props) => {
    const { className } = props;
  return (
    <header className='bg-main flex flex-wrap justify-between p-6'>
        <Logo />
        <Navbar />
    </header>
  )
}

export default Header