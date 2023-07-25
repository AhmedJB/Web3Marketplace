import React from 'react'
import Header from '../components/General/Header'
import Container from '../components/Utils/Container'
import UploadForm from '../components/ProductCreation/UploadForm'

type Props = {}

function upload({ }: Props) {
    return <>
        <Header />
        <Container>
            <h1 className='text-yellow font-medium text-5xl barlow mt-10 mb-3'>Upload new product</h1>
            <UploadForm />
        </Container>

    </>
}

export default  upload