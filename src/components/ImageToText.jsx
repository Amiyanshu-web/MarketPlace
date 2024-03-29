import React, { useState } from 'react';

const CLOUDINARY_CLOUD_NAME = 'dbvg8hyac'


const ImageToText = () => {
    const [resultText, setResultText] = useState('');
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState('');


    const handleImageChange = async (e) => {
        setLoading(true);
        try {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'AtlanPreset'); // Replace 'your_upload_preset' with your Cloudinary upload preset

            const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                setImageUrl(data.secure_url);
            } else {
                console.error('Failed to upload image to Cloudinary');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
        setLoading(false);
    };

    const handleFormSubmit = async () => {
        setLoading(true);
        try {
            const apiUrl = "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large";
            const apiKey = "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"; // Your API key

            const data = imageUrl;

            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${apiKey}`,
                },
                body: data
            });
            console.log(response);

            if (response.ok) {
                const data = await response.json();
                console.log(data[0].generated_text);
                setResultText(data[0].generated_text);
            } else {
                console.error('API request failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
        setLoading(false);
        console.log(resultText);
    }


    return (
        <div className='p-2 border-2'>
            <div className='form-control'>
                <label htmlFor='image' className='label'>
                    <h1 className='capitalize font-bold text-secondary'>Convert image to text</h1>
                </label>
                <input
                    type="file"
                    id='image'
                    accept="image/*"
                    className='input input-bordered border-dashed pt-2'
                    onChange={handleImageChange}
                />
            </div>
            <div className='flex justify-center'>
                {imageUrl && (
                    <img src={imageUrl} alt="Selected" className="h-[50vh] mt-3 border border-gray-300" />
                )}
            </div>
            {loading ?
                <span className='mt-8 ml-2 loading loading-dots loading-lg'>
                    Loading...
                </span>
                :
                <button onClick={handleFormSubmit} className='btn btn-primary btn-sm mt-8'>
                    Convert
                </button>
            }

            <div className='m-5'>
                <textarea
                    className="textarea h-32 textarea-bordered textarea-primary mt-4 w-full capitalize"
                    placeholder="Result Text"
                    value={resultText}
                    readOnly
                />
            </div>
        </div>
    )
}

export default ImageToText;
