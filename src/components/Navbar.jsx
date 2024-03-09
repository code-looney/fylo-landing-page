import React from 'react'

const Navbar = () => {
  return (
        <ul className='flex flex-wrap sm:gap-9 text-[14px] items-center font-light font-sans text-white'>
            <li className='hover:underline cursor-pointer'>Features</li>
            <li className='hover:underline cursor-pointer'>Team</li>
            <li className='hover:underline cursor-pointer'>Sign In</li>
        </ul>
  )
}

export default Navbar