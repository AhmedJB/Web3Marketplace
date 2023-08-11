/* import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, useAnimate } from "framer-motion"

type Props = {}

function CustomSlider({ }: Props) {

    const [slides, setSlides] = useState([
        {
            image: "./APPAREL.jpg",
            title: "Apparel"
        },
        {
            image: "./CRAFTSMAN.jpg",
            title: "Craftsman"
        }, {
            image: "./ACCESSORIES.jpg",
            title: "Accessories"
        }, {
            image: "./HOMEWARE.jpg",
            title: "Homeware"
        }, {
            image: "./COSMETICS.jpg",
            title: "Cosmetics"
        }, {
            image: "./APPAREL.jpg",
            title: "Apparel3"
        }, {
            image: "./APPAREL.jpg",
            title: "Apparel4"
        }, {
            image: "./APPAREL.jpg",
            title: "Apparel5"
        }
    ]);
    const [trigger, setTrigger] = useState(true);
    const [scope, animate] = useAnimate()


    const handleNav = (step: number) => {
        console.log(`using step ${step}`)
        let temp = [...slides]
        if (step === 1) {
            let elem = temp.shift();
            temp.push(elem)
            animate("div", { x: -100 })
        } else if (step === -1) {
            let elem = temp.pop();
            temp.splice(0, 0, elem);
        }
        console.log("New array is ", temp)
        setSlides(temp);
        setTrigger((prev) => !prev)
        animate("div", { x: 0 })


    }

    const variants = {
        initial: {
            x: 100,
        },
        rightAnimation: (i) => ({
            x: [100, 0],
            transition: {
                duration: 0.4,
            },
        }),
        leftAnimation: (i) => ({
            x: [100, 0],
            transition: {
                duration: 0.4,
            },
        }),
        exit: {
            x: -100
        }
    };




    return <>
        <div className="p-5 my-10 flex flex-col items-center">
            {
                slides.length >= 5 && <>
                    <div ref={scope} className='w-full flex items-center justify-center gap-3'>

                        {
                            slides.map((e, i) => {
                                if (i < 5) {
                                    return <motion.div
                                        variants={variants}
                                        initial={"initial"}
                                        animate={trigger ? "initial" : "initial"}

                                        custom={i}
                                        layout
                                        key={`custom-slide-${i}`}
                                        className={`text-white bg-yellow w-[200px] aspect-[3/2] `}
                                    >{e.title}</motion.div>
                                } else {
                                    return <></>
                                }
                            })
                        }


                    </div>


                </>
            }
            <div className="flex items-center gap-5 my-4">
                <button className='text-white p-3 bg-redOrb' onClick={() => handleNav(-1)} >Prev</button>
                <button className='text-white p-3 bg-redOrb' onClick={() => handleNav(1)} >Next</button>
            </div>
        </div>


    </>



}

export default CustomSlider */