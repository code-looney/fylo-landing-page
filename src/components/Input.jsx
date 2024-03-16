import React, {useState} from 'react'

const Input = (props) => {
      const { className, placeHolder, value} = props;
    


  return (
    <>
    <input value={props.value} className={className} placeholder={placeHolder} type="text" onChange={props.onEmailChange} />
    </>
  )
}

export default Input