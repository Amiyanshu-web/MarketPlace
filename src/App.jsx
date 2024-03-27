import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  Error,
  HomeLayout,
  Landing,
  Models,
  SingleModel,
  SingleFeature,
} from './pages';

import { ErrorElement } from './components';

// loaders
import { loader as landingLoader } from './pages/Landing';
import { loader as singleModelLoader } from './pages/SingleModel';
import { loader as singleFeatureLoader } from './pages/SingleFeature';
import { loader as modelsLoader } from './pages/Models';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader(queryClient),
      },
      {
        path: 'models',
        element: <Models />,
        errorElement: <ErrorElement />,
        loader: modelsLoader(queryClient),
      },
      {
        path: 'data/:id',
        element: <SingleModel />,
        errorElement: <ErrorElement />,
        loader: singleModelLoader(queryClient),
      },
      {
        path: 'featured/:id',
        element: <SingleFeature />,
        errorElement: <ErrorElement />,
        loader: singleFeatureLoader(queryClient),
      },
    ],
  }
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
export default App;
