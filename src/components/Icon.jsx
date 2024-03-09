import React from 'react'

const Icon = (props) => {
    const { className, iconClassName, iconURL } = props;
  return (
    <div className={className}>
        <img className={iconClassName} src={iconURL} alt="" />
    </div>
  )
}

export default Icon