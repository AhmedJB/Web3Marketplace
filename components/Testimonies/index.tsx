import React, {useState} from 'react'
import styles from "../../styles/modular/Testimonies.module.css"
import TestimonyCard from './TestimonyCard'

type Props = {}

function Testimonies({}: Props) {

    const [limit,setLimit] = useState(12);



    return <>
    <div className="w-full relative">
    <div className="w-full md:container mx-auto ">
                <h1 className="text-3xl text-center font-semibold text-yellow">
                    Testimonies
                </h1>
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-1 w-full gap-1 p-3 max-w-[1450px] mx-auto">
                    {
                        (new Array(limit)).fill(0).map((e,i) => (
                            <TestimonyCard />
                        ))
                    }

                    
                </div>
                

        </div>


    <button className="absolute bottom-1/3 bg-mainDark p-4 rounded-lg border-none text-white left-1/2 -translate-x-1/2">Show more</button>

    <div className={`absolute w-full h-1/4 bg-mainDark left-0 bottom-0 ${styles.shadow} `}></div>
    </div>  
        
    
    </>

}

export default Testimonies