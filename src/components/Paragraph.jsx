import React from 'react'

export const Paragraph = (props) => {
  const { subClassName, className, children } = props;
  return (
    <div className={subClassName}>
        <p className={className}>{children}</p>
    </div>
  )
}

export default Paragraph