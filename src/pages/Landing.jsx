import { FeaturedModels, Hero } from '../components';

import { customFetchModel } from '../utils';
const url = '/featured';

const featuredModelsQuery = {
  queryKey: ['featuredModels'],
  queryFn: () => customFetchModel(url),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredModelsQuery);

  const data = response.data;
  return { data };
};


const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedModels />
    </>
  );
};
export default Landing;
