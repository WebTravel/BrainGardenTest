import { all, fork } from 'redux-saga/effects';
import { watchImages } from '@features/Gallery';
import { watchImage } from '@features/Image';

export function* rootSaga() {
  yield all([watchImages, watchImage].map(saga => fork(saga)));
}
