import React from 'react'

const Logo = (props) => { 
  const  { className } = props;
  return (
    <div className={className}>
        <img src="images/logo.svg" alt="" />
    </div>
  )
}

export default Logo