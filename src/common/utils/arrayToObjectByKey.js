export const arrayToObjectByKey = (arr, keyField = 'id') =>
  Object.assign({}, ...arr.map(item => ({ [item[keyField]]: item })));
