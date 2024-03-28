import { SectionTitle, CreateModelForm } from '../components';

const CreateModel = () => {
    return (
        <>
            <SectionTitle text='Add Model' />
            <div className='mt-8 grid gap-8 items-start m-4'>
                <CreateModelForm />
            </div>
        </>
    );
};
export default CreateModel;
