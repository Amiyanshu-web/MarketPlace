import axios from 'axios';

const modelUrl = 'https://my-json-server.typicode.com/Amiyanshu-web/llm-db';
// const productionUrl = 'https://fakestoreapi.com/';

export const customFetchModel = axios.create({
  baseURL: modelUrl,
});


