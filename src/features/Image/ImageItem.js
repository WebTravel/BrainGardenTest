import React, { useRef, useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useEffectOnce, useUpdateEffect } from 'react-use';
import { useSelector, useDispatch } from 'react-redux';
import { Loader } from '@components/UI/Loader';
import { Error } from '@components/UI/Error';
import {
  imageIsLoadingSelector,
  imageErrorSelector,
  imageDataSelector,
} from './selectors';
import { getImageStart } from './ducks';
import { Filters } from './components/Filters';

const CanvasWidth = 600;
const CanvasHeight = 400;

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Canvas = styled.canvas`
  margin-bottom: 20px;
`;

const image = new Image();

export const ImageItem = ({ name }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(imageIsLoadingSelector);
  const error = useSelector(imageErrorSelector);
  const imageUrl = useSelector(imageDataSelector);
  const [ctx, setCtx] = useState(null);
  const [isErrorLoadImage, setIsErrorLoadImage] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const canvasRef = useRef(null);
  const setImageInCanvas = useCallback(() => {
    ctx.drawImage(image, 0, 0, CanvasWidth, CanvasHeight);
  }, [ctx]);

  useEffectOnce(() => {
    dispatch(getImageStart(name));
  });

  useUpdateEffect(() => {
    image.onerror = () => setIsErrorLoadImage(true);
    image.onload = () => setIsImageLoaded(true);
    image.src = imageUrl;
  }, [imageUrl]);

  useUpdateEffect(() => {
    setCtx(canvasRef.current.getContext('2d'));
  }, [isImageLoaded]);

  useUpdateEffect(() => {
    ctx.canvas.width = CanvasWidth;
    ctx.canvas.height = CanvasHeight;
    setImageInCanvas();
  }, [ctx]);

  if (isLoading || !isImageLoaded) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }

  if (error || isErrorLoadImage) {
    return (
      <Wrapper>
        <Error>Не удалось загрузить изображение</Error>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Canvas ref={canvasRef} />
      <Filters image={image} ctx={ctx} resetImageSetting={setImageInCanvas} />
    </Wrapper>
  );
};
