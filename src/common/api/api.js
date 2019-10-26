import axios from 'axios';
import { handleServerErrors } from './utils';

const { API_URL } = process.env;

export const api = axios.create({
  baseURL: API_URL,
  'Content-Type': 'application/json',
});

api.interceptors.response.use(
  config => config,
  error => Promise.reject(handleServerErrors(error)),
);
