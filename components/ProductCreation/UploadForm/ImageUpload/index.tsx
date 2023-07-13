import Image from 'next/image';
import React, { Dispatch, SetStateAction, useRef } from 'react'
import { MdUploadFile } from "react-icons/md"
import { AiOutlineClose } from "react-icons/ai"


type Props = {
    images: FileList[] | [];
    setImages: Dispatch<SetStateAction<FileList[] | []>>
}

function ImageUpload({ images, setImages }: Props) {





    const inputRef = useRef(null);

    const startUpload = () => {
        console.log(inputRef.current)
        if (inputRef.current) {
            (inputRef.current as HTMLInputElement).files
            inputRef.current.click();
        }
    }

    const handleFileInputChange = (v) => {
        console.log(images)
        if (images.length < 3) {
            let temp = [...images]
            temp.push(inputRef.current.files[0]);
            console.log(temp)
            setImages(temp)
            inputRef.current.value = null;
        }
    }

    const removeImage = (index: number) => {
        let temp = [...images];
        temp.splice(index, 1);
        setImages(temp);
    }

    return (
        <div className="flex flex-col">
            <h3 className="text-xl text-white font-normal">Product Images</h3>
            <p className="text-md opacity-75 text-white font-light my-3">
                Upload high-quality images of your product. Showcase your product from multiple angles and in various settings if possible.
            </p>
            <input onChange={handleFileInputChange} ref={inputRef} hidden={true} type="file" accept=".png, .gif, .webp" max-size="2000000" />
            <div className="w-full aspect-[3/2] border-dashed border-cardGray rounded-xl border-2 grid place-items-center">
                <div className="flex flex-col items-center gap-4">
                    <MdUploadFile className="text-white text-4xl" />
                    <p className="text-white text-md font-normal">
                        PNG, GIF, WEBP. Max size: 2MB (Max : 3)
                    </p>
                    {
                        images.length < 3 && <button className="px-7 py-2 rounded-[3rem] text-green border-2 border-green text-sm" onClick={() => { startUpload() }}>Upload</button>
                    }


                </div>



            </div>

            <div className="flex items-center justify-between p-3">
                {
                    images.map((e, i) => (
                        <div className="relative w-[150px] h-[150px] cursor-pointer transition-transform hover:scale-105 " onClick={() => removeImage(i)}>
                            <Image src={URL.createObjectURL(e)} alt="uploaded image" key={`Image-${i}`} fill={true} className="rounded-lg" />
                            <div className="absolute h-full w-full bg-mainDark transition-opacity opacity-0 hover:opacity-50 z-[2] grid place-items-center" ><AiOutlineClose className='text-white text-5xl' /></div>
                        </div>

                    ))
                }
                {
                    (new Array(3 - images.length).fill(0).map((e, i) => (
                        <div key={`placeholder-${i}`} className="w-[150px] h-[150px] border-2 border-cardGray rounded-lg"></div>
                    )))
                }
            </div>
        </div>
    )
}

export default ImageUpload