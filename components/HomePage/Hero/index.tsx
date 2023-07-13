import React from 'react'
import Lamp from "../../../assets/demo/lamp2.jpg"
import ImageCard from './ImageCard'
import { BsArrowDownCircle } from "react-icons/bs"

type Props = {

}
/* min-h-[calc(100vh-5.5rem)] */

function Hero({ }: Props) {
        return <>
                <div className="w-full h-screen  relative">
                        <div className="md:container w-full h-full left-1/2 top-1/2 lg:flex -translate-x-1/2 -translate-y-1/2  z-[2] absolute hidden justify-between items-center">
                                <div className="flex items-center gap-4">
                                        <div className='flex flex-col items-center gap-4'>
                                                <ImageCard image={Lamp} />
                                                <ImageCard image={Lamp} />

                                        </div>
                                        <ImageCard image={Lamp} />
                                </div>
                                <div className="flex items-center gap-4">
                                        <ImageCard image={Lamp} />
                                        <div className='flex flex-col items-center gap-4'>
                                                <ImageCard image={Lamp} />
                                                <ImageCard image={Lamp} />

                                        </div>

                                </div>
                        </div>
                        <div className="w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  z-[4] absolute bg-black opacity-[0.46]"></div>

                        <div className="md:container w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  z-10 absolute flex flex-col  items-center justify-between ">
                                <div>
                                        <h1 className="text-headerColor lg:text-7xl text-6xl  text-center font-semibold barlow mt-[10rem] ">Buy and Sell  Authentic <br /> Moroccan Products</h1>
                                        <p className="barlow text-white font-normal text-2xl text-center my-5 opacity-80 leading-9">Discover a unique collection of authentic products, meticulously <br /> handcrafted and filled with the rich cultural heritage of Morocco.</p>
                                </div>

                                <BsArrowDownCircle className=" text-headerColor text-4xl mb-[20%]" />

                        </div>
                </div>

        </>
}

export default Hero