import React from 'react'

const FileStorageImage = (props) => {
  const { className, storageClassName } = props;

  return (
    <div className={className}>
        <img className={storageClassName} src="src/images/illustration-stay-productive.png" alt="" />
    </div>
  )
}

export default FileStorageImage