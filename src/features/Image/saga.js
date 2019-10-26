import { call, put, takeLatest } from 'redux-saga/effects';
import { storage } from '@components/Firebase';
import { GET_IMAGE_START, getImageSuccess, getImageReject } from './ducks';

export const getImageTask = function*({ payload }) {
  try {
    const storageRef = storage.ref();
    const imagesRef = storageRef.child(`images/${payload}.jpg`);
    const imageUrl = yield call(() => imagesRef.getDownloadURL());

    yield put(getImageSuccess(imageUrl));
  } catch (error) {
    yield put(getImageReject(error));
  }
};

export const watchImage = function*() {
  yield takeLatest(GET_IMAGE_START, getImageTask);
};
