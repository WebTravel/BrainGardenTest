import { call, put, takeLatest, all } from 'redux-saga/effects';
import { storage } from '@components/Firebase';
import { GET_IMAGES_START, getImagesSuccess, getImagesReject } from './ducks';

export const getImagesTask = function*() {
  try {
    const storageRef = storage.ref();
    const imagesRef = storageRef.child('images');
    const imagesCollection = [];
    const { items } = yield call(() => imagesRef.listAll());

    yield all(
      items.map(item => {
        return call(async () => {
          const url = await item.getDownloadURL();

          imagesCollection.push({
            url,
            name: item.name
              .split('.')
              .slice(0, -1)
              .join('.'),
          });
        });
      }),
    );

    yield put(getImagesSuccess(imagesCollection));
  } catch (error) {
    yield put(getImagesReject(error));
  }
};

export const watchImages = function*() {
  yield takeLatest(GET_IMAGES_START, getImagesTask);
};
