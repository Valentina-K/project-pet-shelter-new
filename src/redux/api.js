import axios from 'axios';

export const publicApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const privateApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const setAuthToken = (token) => {
  if (token) {
    privateApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete privateApi.defaults.headers.common['Authorization'];
  }
};
