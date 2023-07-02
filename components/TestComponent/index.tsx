import Image, { StaticImageData } from 'next/image';
import React from 'react'


type addressType = {
    rue : string;
}

type Props = {
    name : string;
    image : StaticImageData
    surname ?: addressType ;
}

function TestComponent({name,image,surname}: Props) {
    let address : string;

  return (
    <Image src={image} width={200} height={200} alt="carImage" />
  )
}

export default TestComponent