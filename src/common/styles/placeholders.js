import { theme } from './theme';

export const addHoverOpacity = `
  transition: opacity ${theme.transition.default} ease;

  &:hover {
    opacity: 0.75;
  }
`;
