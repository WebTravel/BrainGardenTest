import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';

const cubeAnimation = keyframes`
  0%,
  100% {
    width: 100%;
    height: 100%;
    clip-path: polygon(0 50%, 50% 0%, 100% 50%, 50% 100%);
  }

  50% {
    width: 0;
    height: 0;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  transform: translate(-50%, -50%);
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.cloudyBlue};
  border-radius: 50%;
  clip-path: polygon(0 50%, 50% 0%, 100% 50%, 50% 100%);
  animation: ${cubeAnimation} 1s ease-in-out infinite;
`;

const LoaderComponent = () => (
  <Wrapper>
    <Inner />
  </Wrapper>
);

export const Loader = memo(LoaderComponent);
