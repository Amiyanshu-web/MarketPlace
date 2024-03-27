import { ModelFilters, ModelsContainer } from '../components';
import { customFetchModel } from '../utils';
const url = '/data';

const allModelsQuery = (queryParams) => {
    // const { search, category, sort, page } = queryParams;
    const { name, category } = queryParams;

    const params = { ...(name && { name }), ...(category && { category }) };

    return {
        queryKey: [
            'models',
            name || '', // Using an empty string if name is falsy
            category || ''
        ],
        queryFn: () =>
            customFetchModel(url, {
                params: params,
            }),
    };
};

export const loader = (queryClient) => async ({ request }) => {
    const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
    ]);

    const response = await queryClient.ensureQueryData(
        allModelsQuery(params)
    );
    const data = response.data;
    return { data, params };
};

const Models = () => {
    return (
        <>
            <ModelFilters />
            <ModelsContainer />
        </>
    );
};
export default Models;
