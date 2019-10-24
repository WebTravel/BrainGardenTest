import React, { memo } from 'react';
import styled from 'styled-components';

const StyledError = styled.div`
  font-size: ${({ theme }) => theme.fonts.size.s};
  color: ${({ theme }) => theme.colors.mediumPink};
`;

const ErrorComponent = ({ children, className }) => (
  <StyledError className={className}>{children}</StyledError>
);

export const Error = memo(ErrorComponent);
