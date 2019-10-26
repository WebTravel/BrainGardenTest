import React, { memo } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  font-size: ${({ theme }) => theme.fonts.size.l};
`;

const NotFountComponent = () => (
  <Wrapper>Ошибка 404. Страница не найдена</Wrapper>
);

export const NotFound = memo(NotFountComponent);
