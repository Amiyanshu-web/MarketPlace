import React, { useState } from "react";
import { Form, redirect } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';
import { customFetchModel } from '../utils';
import { toast } from 'react-toastify';
import FormSelect from './FormSelect';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-python"; // Include Python mode
import "ace-builds/src-noconflict/theme-twilight"; // Include Twilight theme

export const action =
    (queryClient) =>
        async ({ request }) => {
            const formData = await request.formData();
            const { name, image, category, description, provider, use_cases, code_snippet } = Object.fromEntries(formData);

            const info = {
                name,
                image,
                category,
                description,
                provider,
                use_cases,
                code_snippet
            };

            try {
                const response = await customFetchModel.post(
                    '/data',
                    { data: info }
                );
                queryClient.removeQueries(['orders']);
                toast.success('Model Added successfully');
                return redirect('/models');
            } catch (error) {
                console.log(error);
                const errorMessage =
                    error?.response?.data?.error?.message ||
                    'there was an error placing your order';
                toast.error(errorMessage);
                if (error?.response?.status === 401 || 403) return redirect('/');
                return null;
            }
        };

const CreateModelForm = () => {
    const [code, setCode] = useState('const hello = "world";');

    return (
        <>
            <Form method='POST' className='gap-6 grid grid-cols-2'>
                <FormInput label='name' name='name' type='text' required='true' />
                <div className='mt-2'>
                    <label>Image</label>
                    <br />
                    <input type='file' name='image' className='py-4' />
                </div>
                <FormSelect
                    label='select category'
                    name='category'
                    list={['Natural Language Processing', 'Computer Vision', 'Image Classification', 'Others']}
                    size='select-sm'
                />
                <FormInput label='Description' name='description' type='text' required='true' />
                <FormInput label='Provider' name='provider' type='text' placeholder='Ex-Microsoft' required='true' />
                <FormInput label='Uses' name='use_cases' type='text' placeholder='Write use cases seperated by comma ( , )' required='true' />

                <div>
                    <label>Example Code Snippet</label>
                    <AceEditor
                        mode="python" 
                        theme="twilight" 
                        onChange={(newValue) => {
                            setCode(newValue);  
                            const formData = new FormData(); 
                            formData.append('code_snippet', newValue); 
                        }
                    }
                    name="code-editor"
                    editorProps={{ $blockScrolling: true }}
                    value={code}
                    setOptions={{
                        fontSize: 14,
                        showLineNumbers: true,
                        highlightActiveLine: true,
                    }}
                    />
                </div>
                &nbsp;
                <div className='mt-4'>
                    <SubmitBtn text='ADD' />
                    <p className='text-xs'>**When posting data, it's simulated to return a 201 status code, indicating successful creation. However, no changes are actually made in the fake database.</p>
                </div>
            </Form>
        </>
    );
};

export default CreateModelForm;
