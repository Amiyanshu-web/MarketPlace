import React,{useState} from 'react'

const TextToImage = () => {
    const [textInput, setTextInput] = useState('');
    const [frame, setFrame] = useState('');
    const [loading, setLoading] = useState(false);

    const handleTextInputChange = (e) => {
        setTextInput(e.target.value);
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const apiUrl = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0";
            const apiKey = "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";


            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Accept": "image/png",
                    "Authorization": `Bearer ${apiKey}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ inputs: textInput })
            });

            if (response.ok) {
                const blob = await response.blob();
                const imageUrl = URL.createObjectURL(blob);
                setFrame(imageUrl);
            } else {
                // Handle error response
                console.error('API request failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
        setLoading(false);
    }
    
  return (
      <div className='p-2 border-2'>
          <div className='form-control'>
              <label htmlFor='name' className='label'>
                  <h1 className='capitalize font-bold text-secondary'>Generate image from text</h1>
              </label>
              <input
                  type="text"
                  name='name'
                  className='input input-bordered input-sm'
                  placeholder='Describe what you want to see!'
                  required={true}
                  value={textInput}
                  onChange={handleTextInputChange}
              />
          </div>
          {loading ?
              <span className='mt-8 ml-2 loading loading-dots loading-lg'>
                  Loading...
              </span>
              :
              <button onClick={handleSubmit} className='btn btn-primary btn-sm mt-8'>
                  search
              </button>
          }

          <div className='m-5'>
              {frame ? <img src={frame} alt='Image' ></img> : <img src='https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp' alt='Demo'></img>}
          </div>

      </div>
  )
}

export default TextToImage