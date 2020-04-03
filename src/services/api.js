import axios from 'axios';

const api = axios.create({
  baseURL: 'http://a7b4f62b.ngrok.io/',
});

export default api;
