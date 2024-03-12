import React from 'react'

const Link = (props) => {
    const { href, className, children } = props;

  return (
    <a href={href} className={className}>{children}</a>
  )
}

export default Link