import React, { ReactNode } from 'react'
import { AiOutlineClose } from "react-icons/ai"

type Props = {
    open: boolean,
    title: string,
    close: () => void,
    children: ReactNode
}





function Modal({ open, close, children, title }: Props) {


    return <>
        {
            open && <>


                <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-modalBg shadow-sm rounded-xl md:w-[300px] w-full p-4 z-[2000] ">
                    <div className='w-full flex items-center justify-between'>
                        <h2 className="text-xl text-white font-semibold w-3/4">{title}</h2>
                        <AiOutlineClose
                            onClick={close}
                            className="text-xl text-white cursor-pointer" />
                    </div>
                    {children}

                </div>
                <div
                    onClick={close}
                    className="fixed top-0 left-0 w-screen h-screen bg-black opacity-70 z-[1999]">

                </div>
            </>
        }
    </>
}

export default Modal