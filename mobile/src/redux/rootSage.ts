
import {all, AllEffect, call, ForkEffect, spawn} from 'redux-saga/effects';
import jokeSaga from './Joke/saga';
export default function* rootSaga(): Generator {
  // yield all([applicationSaga(), sessionSaga()]);
  return yield all([jokeSaga()]);
}