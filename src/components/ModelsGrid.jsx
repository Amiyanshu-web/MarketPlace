import { Link, useLoaderData } from 'react-router-dom';

const ModelsGrid = ({isFeatured}) => {
    const { data } = useLoaderData();
    console.log(data);
    return (
        <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {data?.map((model) => {
                const { name, category, image } = model;
                return (
                    <Link
                        key={model.id}
                        to={isFeatured ?`/featured/${model.id}`:`/data/${model.id}`}
                        className='card w-full shadow-xl hover:shadow-2xl transition duration-300'
                    >
                        <figure className='px-4 pt-4'>
                            <img
                                src={image}
                                alt={name}
                                className='rounded-xl h-64 md:h-48 object-contain'
                            />
                        </figure>
                        <div className='card-body items-center text-center'>
                            <h2 className='card-title capitalize tracking-wider'>{name}</h2>
                            <span className='text-secondary'>{category}</span>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};
export default ModelsGrid;
