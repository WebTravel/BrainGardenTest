export const overrideErrors = (errors, messages) => ({
  ...errors,
  root: messages[errors.statusCode],
});
