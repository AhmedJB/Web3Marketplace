import React, { useEffect, useState } from 'react'
import styles from "../../styles/modular/Testimonies.module.css"
import TestimonyCard from './TestimonyCard'
import { testimonyDemoData } from '../../../demoData/testimonies';
import { TestimonyData } from '../../../types/Testimonies';
import useWindowSize from '../../../hooks/useWindowSize';
import Account from '../../Utils/Accounts';
import useEagerConnect from '../../../hooks/useEagerConnect';

type Props = {}

function Testimonies({ }: Props) {

    const [show, setShow] = useState(false)
    const [splited, setSplited] = useState([[], [], [], []])
    const [lastWindowSize, setLastWindowSize] = useState(0);
    const bigLargeLimit = 1280;
    const largeLimit = 1030;
    const mediumLimit = 770;

    const windowSize = useWindowSize();
    const triedToEagerConnect = useEagerConnect();

    function separateArrayByWidth(arr: TestimonyData[]) {
        if (windowSize.width >= bigLargeLimit) {
            if (lastWindowSize >= bigLargeLimit) {
                return splited;
            }
            return separateArray(arr, 4);
        } else if (windowSize.width >= largeLimit) {
            if (lastWindowSize >= largeLimit && lastWindowSize < bigLargeLimit) {
                return splited;
            }
            return separateArray(arr, 3);
        } else if (windowSize.width >= mediumLimit) {
            if (lastWindowSize >= mediumLimit && lastWindowSize < largeLimit) {
                return splited;
            }
            return separateArray(arr, 2);
        } else {
            if (lastWindowSize > 0 && lastWindowSize < mediumLimit) {
                return splited;
            }
            return separateArray(arr, 1);
        }
    }

    function separateArray(arr: TestimonyData[], numArrays: number) {
        const separatedArrays = [];
        const itemsPerArray = Math.ceil(arr.length / numArrays);

        for (let i = 0; i < numArrays; i++) {
            const startIndex = i * itemsPerArray;
            const endIndex = startIndex + itemsPerArray;
            const newArray = arr.slice(startIndex, endIndex);
            separatedArrays.push(newArray);
        }

        for (let i = 0; i < (4 - numArrays); i++) {
            separatedArrays.push([]);
        }
        setSplited(separatedArrays);
        return separatedArrays;
    }


    const toggleShow = () => {
        setShow(!show);
    }

    useEffect(() => {
        separateArrayByWidth(testimonyDemoData);
        setLastWindowSize(windowSize.width);

    }, [windowSize])



    return <>
        <div className="w-full relative mb-64">
            <div className="w-full md:container mx-auto ">
                <Account triedToEagerConnect={triedToEagerConnect} />
                <h1 className="text-3xl text-center font-semibold text-yellow">
                    Testimonies
                </h1>
                <div className={`mx-auto  ${show ? "" : "max-h-[25rem] overflow-hidden"}  `}>
                    <div className="w-full h-fit grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-1  gap-1 p-3 max-w-[1450px] ">

                        {
                            splited.map((e, i) => (
                                <div
                                    key={`testimony-container-${i}`}
                                >
                                    {
                                        e.map((e1, i1) => (
                                            <TestimonyCard
                                                key={`testimony-card-${i}-${i1}`}
                                                name={e1.name}
                                                tag={e1.tag}
                                                text={e1.text}
                                                image={e1.image}
                                                date={e1.date}
                                            />
                                        ))
                                    }

                                </div>

                            ))
                        }


                        {/* {
                        testimonyDemoData.map((e,i) => (
                            <TestimonyCard 
                                name={e.name}
                                tag={e.tag}
                                text={e.text}
                                image={e.image}
                                date={e.date}
                            />
                        ))
                    } */}

                    </div>






                </div>


            </div>


            <div className="absolute bottom-0 w-full faded-bg pt-32 pb-20 grid place-items-center">
                <button onClick={toggleShow} className="gradient-bg px-4 py-2 z-[3] rounded-lg border-none text-white text-md font-semibold cursor-pointer transition-transform hover:scale-105 ">{
                    show ? "Hide" : "Show More"
                }</button>
            </div>

            {/* <button className="absolute bottom-[250px] gradient-bg px-4 py-2 z-[3] rounded-lg border-none text-white left-1/2 -translate-x-1/2 text-md font-semibold cursor-pointer transition-transform hover:scale-105 ">Show more</button> */}

            {/* <div className={`absolute w-full h-[200px] bg-mainDark left-0 bottom-0 ${styles.shadow} `}></div> */}
        </div>


    </>

}

export default Testimonies