// import cookie from 'react-cookies';
import actionTypes from '../actionTypes';

export const login = (params) => ({
    type: actionTypes.AUTH_LOGIN_REQUEST,
    params
})
