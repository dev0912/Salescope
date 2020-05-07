// import cookie from 'react-cookies';
import {
  put,
  call
} from 'redux-saga/effects';
import * as API from '../services/api';
import actionTypes from '../actionTypes';

export function* login({ params }) {
  console.log('PARAMS: ', params);
  try {
    const result = yield call(API.login, params);
    console.log('RESULT: ', result);

    // if (result.key) {
    //   cookie.save('token', result.key, {
    //     path: '/'
    //   });
    //   yield put({
    //     type: actionTypes.AUTH_LOGIN_SUCCESS,
    //     result
    //   });
    // } else {
    //   yield put({
    //     type: actionTypes.AUTH_LOGIN_ERROR,
    //     error: result.error
    //   });
    // }
  } catch (error) {
    yield put({
      type: actionTypes.AUTH_LOGIN_ERROR,
      error
    });
  }
}
