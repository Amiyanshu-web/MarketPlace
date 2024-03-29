import React, { useState } from 'react'
import { ImageToText, TextToImage } from '../components';

const Try = () => {

    return (
        <>
            <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
                <TextToImage />
                <ImageToText />
            </div>
        </>
    )
}

export default Try;