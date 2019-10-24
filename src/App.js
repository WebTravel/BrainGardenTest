import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import { GlobalStyle } from '@styles/GlobalStyles';
import { configureStore, runSagaMiddleware } from '@src/store';
import { Root } from '@src/Root';

export const store = configureStore();
runSagaMiddleware();

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Root />
      </ThemeProvider>
    </Provider>
  );
};
