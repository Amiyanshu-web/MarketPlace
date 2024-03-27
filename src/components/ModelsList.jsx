import { Link, useLoaderData } from 'react-router-dom';

const ModelsList = () => {
    const { data } = useLoaderData();

    return (
        <div className='mt-12 grid gap-y-8'>
            {data?.map((model) => {
                const { name, image, category, provider } = model;
                return (
                    <Link
                        key={model.id}
                        to={`/data/${model.id}`}
                        className='p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap  bg-base-100 shadow-xl hover:shadow-2xl duration-300 group'
                    >
                        <img
                            src={image}
                            alt={name}
                            className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-contain group-hover:scale-105 transition duration-300'
                        />
                        <div className='ml-0 sm:ml-16'>
                            <h3 className='capitalize font-medium text-lg'>{name}</h3>
                            <h4 className='capitalize text-md text-neutral-content'>
                                {provider}
                            </h4>
                        </div>
                        <p className='font-medium ml-0 sm:ml-auto text-lg'>
                            {category}
                        </p>
                    </Link>
                );
            })}
        </div>
    );
};
export default ModelsList;
