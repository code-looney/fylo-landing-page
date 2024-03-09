import React from 'react'

const Title = (props) => {
  const { titleClassName, className, children } = props;

  return (
    <div className={titleClassName}>
        <h1 className={className}>{children}</h1>
    </div>
  )
}

export default Title