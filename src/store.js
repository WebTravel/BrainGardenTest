import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

const { APP_ENV } = process.env;
const sagaMiddleware = createSagaMiddleware();

export const configureStore = (initState, history) => {
  const initialState = initState || {};

  const composeEnhancers =
    // eslint-disable-next-line no-underscore-dangle
    APP_ENV === 'dev'
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      : compose;

  return createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );
};

export function runSagaMiddleware() {
  sagaMiddleware.run(rootSaga);
}
