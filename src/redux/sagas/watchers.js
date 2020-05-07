import {
  takeEvery
} from 'redux-saga/effects';
import actionTypes from '../actionTypes';
import * as Auth from './auth';

export function* watchers() {
  yield takeEvery(actionTypes.AUTH_LOGIN_REQUEST, Auth.login);
}
