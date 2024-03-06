import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'

const Header = (props) => {
    const { className } = props;
  return (
    <div className={className}>
        <Logo />
        <Navbar />
    </div>
  )
}

export default Header