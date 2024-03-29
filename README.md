# MarketPlace

Welcome to the AI Model Marketplace application! This project was developed, aiming to provide users with a comprehensive platform for exploring various AI models deployed by organizations and developers worldwide.

![Screenshot](/src/assets/ss1.png)

## Features

* **Model Browser**- Discover a diverse range of AI models showcased on the platform. Utilizing a mock API (https://my-json-server.typicode.com/), the application provides an extensive list of models with detailed information, including descriptions, providers and potential use cases.

* **Featured Wall** - Explore the most loved and popular models in the Featured Models section. These models are highlighted based on factors such as user views and developer favorites, providing insights into trending AI technologies.

* **Model Details** - Delve deeper into specific models with dedicated pages that offer comprehensive details. Each model page includes a description, provider information, code snippets for example usage, and additional insights into the model's capabilities.

* **Filtering Capabilities** - Efficiently search for particular models and filter models by category using advanced filtering capabilities. Users need to enter exact case sensitive name in search filter to filter it out.

* **Theme Toggle** - Switch between light and dark themes with the theme toggle functionality. Users can customize their viewing experience according to their preferences, ensuring comfortable usage in different lighting conditions.
 
* **Creator Space** - For model providers, the platform offers a space to upload information about their models seamlessly.

* **"Try it Out" Functionality** - Experience AI models firsthand with the "Try it" feature. Users can interact with specific models without writing code, enabling practical demonstrations of model functionalities. For now *text-to-image* and *image-to-text* models are available.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: The official, opinionated, batteries-included toolset for efficient Redux development.
- **@tanstack/react-query**: A data-fetching library for React, designed to make fetching, caching, synchronizing, and updating server state in React applications easier and more flexible.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **React Icons**: Popular icon library for React projects.
- **React Toastify**: A React library for toast notifications.
- **Vanta**: A lightweight and easy-to-use background animation library.
- **Tailwind CSS**: A utility-first CSS framework for building custom designs quickly.
- **DaisyUI**: A collection of utility classes and components for Tailwind CSS to build responsive and accessible UIs.

## Getting Started

To get started with the AI Model Showcase application, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to project repository `cd MarketPlace`
2. Install the necessary dependencies by running `npm install`
3. Start the development server by running `npm run dev` 
4. Explore the various AI models available on the platform and unleash your creativity!

## Performance

* **Lighthouse Report:**
I utilized Lighthouse to assess the performance, quality, and correctness of the application. Below is a summary screenshot of the Lighthouse report, along with a PDF link to view the full report:

![Lighthouse Report Summary](/src/assets/lh.png)

[View Lighthouse Report (PDF)](https://drive.google.com/file/d/1_dVx9bVSr7u0-mMxO_w3KsA_fEY4kFm5/view?usp=sharing)

## Optimization Techniques

* **Code Splitting:** Implemented code splitting to reduce initial load times by breaking down code into smaller bundles for faster loading.

* **Tailwind CSS:** Utilized Tailwind CSS, purged unused classes, resulting in faster load times. 

* **Redux Toolkit:** Used Redux Toolkit's `createAsyncThunk` for asynchronous actions, improving code cleanliness and performance.

* **@tanstack/react-query:** Enabled caching for faster data retrieval, reducing network requests and enhancing application responsiveness.

* **CDN Integration for Three.js and Vanta:** Integrated CDNs to improve loading times for 3D graphics and animations, optimizing performance.


