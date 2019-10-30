import { useEffect } from 'react';
import { usePrevious } from 'react-use';
import { isEmpty } from '@utils/isEmpty';

export const useRequestCompleted = (
  isLoading,
  error,
  successCallback = Function.prototype,
  failCallback = Function.prototype,
) => {
  const prevIsLoading = usePrevious(isLoading);
  const isRequestCompleted = prevIsLoading && !isLoading;

  useEffect(() => {
    if (!isRequestCompleted) {
      return;
    }

    if (isEmpty(error)) {
      successCallback();

      return;
    }

    failCallback();
  }, [
    isLoading,
    prevIsLoading,
    error,
    successCallback,
    failCallback,
    isRequestCompleted,
  ]);
};
