import React from 'react';
import Title from './Title';
import Sub from './Sub';
import FileStorageImage from './FileStorageImage';
import Container from './Container';
import Icon from './Icon';
import Link from './Link';

const FileStorage = () => {
  return (
    <div>
        <Title> Stay productive, wherever you are</Title>
        <Sub>Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
  storage needs.</Sub>
        <FileStorageImage />
        <Container>
            <Link>See how Fylo works <Icon iconURL='src/images/icon-arrow.svg' /></Link>
        </Container>
    </div>
  )
}

export default FileStorage