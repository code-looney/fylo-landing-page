import React from 'react'

const Button = (props) => {
    const { btnClassName, className, children } = props;
  return (
    <div className={btnClassName}>
      <button onClick={props.onEmailClick} className={className}>{children}</button>
    </div>
  )
}

export default Button