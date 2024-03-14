import React from 'react'

const Input = (props) => {
    const { className, placeHolder} = props;
  return (
    <input className={className} placeholder={placeHolder} type="email" />
  )
}

export default Input