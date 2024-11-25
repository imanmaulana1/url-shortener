import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env.NEXT_PUBLIC_BASE_URL;

const api = axios.create({
  baseURL,
});

export default api;
