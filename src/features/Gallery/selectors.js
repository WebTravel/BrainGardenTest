import { createSelector } from 'reselect';

const imagesSelector = state => state.images;

export const imagesIsLoadingSelector = createSelector(
  imagesSelector,
  applications => applications.isLoading,
);

export const imagesErrorSelector = createSelector(
  imagesSelector,
  applications => applications.error,
);

export const imagesDataSelector = createSelector(
  imagesSelector,
  applications => applications.data,
);
