import axios from 'axios';
import { history } from '@src/history';
import { ROUTES } from '@common/constants';
import { getToken, setToken, removeToken } from '@utils/token';
import { handleServerErrors } from './utils';

const { API_URL } = process.env;

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  'Content-Type': 'application/json',
});

if (getToken()) {
  api.defaults.headers.Authorization = `Bearer ${getToken()}`;
}

export const setAuthToken = token => {
  setToken(token);
  api.defaults.headers.Authorization = `Bearer ${token}`;
};

export const removeAuthToken = token => {
  removeToken(token);
  delete api.defaults.headers.Authorization;
};

api.interceptors.response.use(
  config => config,
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          if (history.location.pathname !== ROUTES.LOGIN) {
            removeAuthToken();
            history.push(ROUTES.LOGIN);
          }
          break;
        default:
          console.error(error.response.data);
      }
    }

    return Promise.reject(handleServerErrors(error));
  },
);
