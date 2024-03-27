import { Form, useLoaderData, Link } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';

const ModelFilters = () => {
  const { params } = useLoaderData();
  // const { search, category, sort } = params;
  const { name, category } = params;

  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      <FormInput
        type='search'
        label='search model'
        name='name'
        size='input-sm'
        defaultValue={name}
      />
      <FormSelect
        label='select category'
        name='category'
        list={['', 'Natural Language Processing', 'Computer Vision', 'Image Classification']}
        size='select-sm'
        defaultValue={category}
      />

      <button type='submit' className='btn btn-primary btn-sm mt-8'>
        search
      </button>
      <Link to='/models' className='btn btn-accent btn-sm mt-8'>
        reset
      </Link>
    </Form>
  );
};
export default ModelFilters;
