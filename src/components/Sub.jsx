import React from 'react'

const Sub = (props) => {
  const { subClassName, className, children } = props;
  return (
    <div className={subClassName}>
        <p className={className}>{children}</p>
    </div>
  )
}

export default Sub