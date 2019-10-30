import React, { memo, useState } from 'react';
import { useEffectOnce } from 'react-use';
import { Loader } from '@components/UI/Loader';
import { Error } from '@components/UI/Error';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { addHoverOpacity } from '@styles/placeholders';

const ImageLink = styled(Link)`
  position: relative;
  display: block;
  min-height: 100px;
  max-height: 120px;
  overflow: hidden;
  font-size: 0;
  ${addHoverOpacity};
`;

const ImageValue = styled.img`
  object-fit: cover;
`;

const GalleryItemComponent = ({ name, url }) => {
  const [isLoadImage, setIsLoadImage] = useState(false);
  const [isLoadErrorImage, setIsErrorLoadImage] = useState(false);
  const image = new Image();
  const loadImage = () => {
    image.onerror = () => setIsErrorLoadImage(true);
    image.onload = () => setIsLoadImage(true);
    image.src = url;

    return image;
  };

  useEffectOnce(() => {
    loadImage();
  });

  if (isLoadErrorImage) return <Error>Не удалось загрузить изображение</Error>;

  return (
    <ImageLink key={name} to={`image/${name}`}>
      {isLoadImage ? <ImageValue src={url} alt={name} /> : <Loader />}
    </ImageLink>
  );
};

export const GalleryItem = memo(GalleryItemComponent);
