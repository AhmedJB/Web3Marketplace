import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
    image : StaticImageData
}

function ImageCard({image}: Props) {
  return <>
    <div className='relative w-[200px] h-[250px]'>
    <Image src={image} alt="card-hero-image" fill={true}  className='rounded-[10px]' />
    </div>
    
  
  
  </>
}

export default ImageCard