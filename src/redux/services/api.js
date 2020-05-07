import {
  get,
  patch,
  post,
  del
} from './request';

export const login = (params) => post('/token', params, false);