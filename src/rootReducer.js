import { combineReducers } from 'redux';
import { imagesReducer } from '@features/Gallery';
import { imageReducer } from '@features/Image';

export const rootReducer = () =>
  combineReducers({
    images: imagesReducer,
    image: imageReducer,
  });
