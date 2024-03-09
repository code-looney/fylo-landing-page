import React from 'react'

const Link = (props) => {
    const { className, children } = props;

  return (
    <a className={className}>{children}</a>
  )
}

export default Link