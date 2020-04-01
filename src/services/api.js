import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/gabok2/CloneDeezer',
});

export default api;
