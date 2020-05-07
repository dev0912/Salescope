import { fork } from 'redux-saga/effects';
import { watchers } from './watchers';

export default function* rootSaga() {
  yield fork(watchers);
}
