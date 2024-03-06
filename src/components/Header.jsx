import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'

const Header = (props) => {
    const { className } = props;
  return (
    <header className={className}>
        <Logo />
        <Navbar />
    </header>
  )
}

export default Header