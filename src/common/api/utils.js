import { defaultErrorsMessages } from './constants';

export const handleServerErrors = serverErrors => {
  if (!serverErrors.response) return null;

  const statusCode = serverErrors.response.status;
  const transformedErrors = { statusCode };

  if (statusCode !== 400) {
    return {
      ...transformedErrors,
      root: defaultErrorsMessages[statusCode] || defaultErrorsMessages.default,
    };
  }

  const errors = serverErrors.response.data;
  transformedErrors.root = errors.errors;
  Object.keys(errors.children).reduce((acc, field) => {
    acc[field] = errors.children[field].errors;

    return acc;
  }, transformedErrors);

  return transformedErrors;
};
