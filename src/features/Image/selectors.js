import { createSelector } from 'reselect';

const imageSelector = state => state.image;

export const imageIsLoadingSelector = createSelector(
  imageSelector,
  applications => applications.isLoading,
);

export const imageErrorSelector = createSelector(
  imageSelector,
  applications => applications.error,
);

export const imageDataSelector = createSelector(
  imageSelector,
  applications => applications.data,
);
