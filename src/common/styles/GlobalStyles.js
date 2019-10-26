import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
  ${normalize};

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    width: 100%;
    overflow-y: scroll;
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-size: ${({ theme }) => theme.fonts.size.default};
  }

  #app {
    min-height: 100vh;
  }

  img {
    max-width: 100%;
  }

  figure {
    margin: 0;
  }
`;
