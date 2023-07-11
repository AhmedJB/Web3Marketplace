import React, { Dispatch, SetStateAction, useState } from 'react'
import ImageUpload from './ImageUpload'
import FormFields from './FormFields'

type Props = {}

function UploadForm({ }: Props) {

    const [selectedImages, setSelectedImages]: [FileList[] | [], Dispatch<SetStateAction<FileList[] | []>>] = useState([]);


    return <>
        <div className="flex flex-col lg:grid lg:grid-cols-2 p-5">
            <ImageUpload
                images={selectedImages}
                setImages={setSelectedImages}
            />
            <FormFields />
        </div>

    </>

}

export default UploadForm