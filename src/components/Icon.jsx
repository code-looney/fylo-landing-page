import React from 'react'

const Icon = (props) => {
    const {iconClassName, iconURL } = props;
  return (
        <img className={iconClassName} src={iconURL} alt="" />
  )
}

export default Icon