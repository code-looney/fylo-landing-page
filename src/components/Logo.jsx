import React from 'react'

const Logo = (props) => { 
  const  { className } = props;
  return (
    <div className={className}>
        <img src="src/images/logo.svg" alt="" />
    </div>
  )
}

export default Logo