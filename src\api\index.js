import axios from 'axios';

axios.defaults.baseURL = 'https://api.example.com';

export const getProducts = () => {
  return axios.get('/products');
};

export const getProduct = id => {
  return axios.get(`/products/${id}`);
};

export const login = credentials => {
  return axios.post('/login', credentials);
};

export const logout = () => {
  return axios.post('/logout');
};