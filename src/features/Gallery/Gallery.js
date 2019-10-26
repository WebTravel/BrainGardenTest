import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffectOnce } from 'react-use';
import { useSelector, useDispatch } from 'react-redux';
import { addHoverOpacity } from '@styles/placeholders';
import { Loader } from '@components/UI/Loader';
import { Error } from '@components/UI/Error';
import { Content } from '@components/UI/Content';
import {
  imagesIsLoadingSelector,
  imagesErrorSelector,
  imagesDataSelector,
} from './selectors';
import { getImagesStart } from './ducks';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
`;

const ImageLink = styled(Link)`
  ${addHoverOpacity};
`;

export const Gallery = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(imagesIsLoadingSelector);
  const error = useSelector(imagesErrorSelector);
  const images = useSelector(imagesDataSelector);

  useEffectOnce(() => {
    dispatch(getImagesStart());
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
        <Error>Не удалось загрузить изображения</Error>
      </Wrapper>
    );
  }

  return (
    <Content.Grid template="repeat(auto-fill, minmax(200px, 1fr))" gap={60}>
      {images.map(({ url, name }) => (
        <ImageLink key={name} to={`image/${name}`}>
          <img src={url} alt={name} />
        </ImageLink>
      ))}
    </Content.Grid>
  );
};
