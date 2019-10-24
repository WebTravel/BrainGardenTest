import { ROUTES } from '@common/constants';
import { removeToken } from './token';

export const logout = () => {
  removeToken();
  window.location.href = ROUTES.DASHBOARD;
};
