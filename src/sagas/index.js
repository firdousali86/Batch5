import {fork} from 'redux-saga/effects';

import item from './item';
import itemEvery from './itemEvery';
import itemLatest from './itemLatest';
import user from './user';
import movie from './movie';

export default function* rootSaga() {
  yield fork(item);
  yield fork(itemEvery);
  yield fork(itemLatest);
  yield fork(user);
  yield fork(movie);
}
