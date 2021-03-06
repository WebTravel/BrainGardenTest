import { useState } from 'react';

export const useSubmit = submitFunction => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async payload => {
    try {
      setIsLoading(true);
      setError(null);
      await submitFunction(payload);
    } catch (serverErrors) {
      setError(serverErrors);
    } finally {
      setIsLoading(false);
    }
  };

  return [handleSubmit, isLoading, error];
};
