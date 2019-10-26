import { theme } from './theme';

export const resetButtonStyle = `  
  padding: 0;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const addHoverOpacity = `
  transition: opacity ${theme.transition.default} ease;

  &:hover {
    opacity: 0.75;
  }
`;

export const grayCaption = `
  font-weight: ${theme.fonts.weight.medium};
  color: ${theme.colors.black};
`;
