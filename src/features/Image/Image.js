import React from 'react';
import styled from 'styled-components';
import { useEffectOnce } from 'react-use';
import { useSelector, useDispatch } from 'react-redux';
import { Loader } from '@components/UI/Loader';
import { Error } from '@components/UI/Error';
import {
  imageIsLoadingSelector,
  imageErrorSelector,
  imageDataSelector,
} from './selectors';
import { getImageStart } from './ducks';

const Wrapper = styled.div``;

export const Image = ({ name }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(imageIsLoadingSelector);
  const error = useSelector(imageErrorSelector);
  const image = useSelector(imageDataSelector);

  useEffectOnce(() => {
    dispatch(getImageStart(name));
  });

  if (isLoading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <Error>Не удалось загрузить изображение</Error>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <img src={image} alt="" />
    </Wrapper>
  );
};
