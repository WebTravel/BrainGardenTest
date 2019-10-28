import React, { memo } from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
`;

const LoaderComponent = () => (
  <Wrapper>
    <CircularProgress />
  </Wrapper>
);

export const Loader = memo(LoaderComponent);
