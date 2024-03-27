import { useLoaderData } from 'react-router-dom';
import { customFetchModel } from '../utils';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const singleModelQuery = (id) => {
    return {
        queryKey: ['singleModel', id],
        queryFn: () => customFetchModel(`/featured/${id}`),
    };
};

export const loader =
    (queryClient) =>
        async ({ params }) => {
            const response = await queryClient.ensureQueryData(
                singleModelQuery(params.id)
            );

            return { data: response.data };
        };

const SingleFeature = () => {
    const { data } = useLoaderData();
    const { image, name, description, provider, code_snippet, category, use_cases } = data;

    return (
        <section>
            <div className='text-md breadcrumbs ml-4'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/models'>Model</Link>
                    </li>
                </ul>
            </div>
            {/* MODEL */}
            <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
                {/* IMAGE */}
                {/* PRODUCT */}
                <div className='ml-4 mb-2'>
                    <div className='grid-cols-2'>

                        <img
                            src={image}
                            alt={name}
                            className='w-10 h-10 object-contain rounded-lg mb-2'
                        />
                        <h1 className='capitalize text-3xl font-bold underline'>
                            {name}
                        </h1>
                    </div>
                    <h4 className='text-xl text-neutral-content font-bold mt-2'>
                        {provider}
                    </h4>
                    <p className='mt-3 text-secondary'>{category}</p>
                    <p className='mt-6 leading-8'>{description}</p>
                    {/* COLORS */}
                    <div className='mt-6'>
                        <h4 className='text-md font-medium tracking-wider capitalize'>
                            USES
                        </h4>
                        <div className='mt-2'>
                            {use_cases.map((use) => {
                                return (
                                    <span
                                        key={use}
                                        className='badge pb-1 mr-2 border-2 border-primary'
                                    >{use}</span>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className='mt-6 mr-2'>
                    <h4 className='text-md font-medium tracking-wider capitalize'>
                        Example Code Snippet
                    </h4>
                    <SyntaxHighlighter language="python" style={atomDark} customStyle={{ height: '400px', overflowY: 'auto' }}>
                        {code_snippet}
                    </SyntaxHighlighter>
                </div>
            </div>

        </section>
    );
};
export default SingleFeature;
