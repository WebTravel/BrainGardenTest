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

export const ImageItem = ({ name }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(imageIsLoadingSelector);
  const error = useSelector(imageErrorSelector);
  const imageUrl = useSelector(imageDataSelector);
  const [isErrorLoadImage, setIsErrorLoadImage] = useState(false);
  const [isLoadImage, setIsLoadImage] = useState(false);
  const [ctx, setCtx] = useState(null);
  const canvasRef = useRef(null);

  useEffectOnce(() => {
    dispatch(getImageStart(name));
  });

  const image = new Image();
  const loadImage = () => {
    image.src = '/2.jpg';
    image.setAttribute('crossOrigin', '');
    image.onerror = () => setIsErrorLoadImage(true);
    image.onload = () => setIsLoadImage(true);

    return image;
  };
  const createImageInCanvas = useCallback(() => {
    ctx.canvas.width = CanvasWidth;
    ctx.canvas.height = CanvasHeight;
    setTimeout(() => {
      ctx.drawImage(image, 0, 0, CanvasWidth, CanvasHeight);
    }, 0);
  }, [ctx, image]);

  useEffect(() => {
    if (canvasRef.current) {
      setCtx(canvasRef.current.getContext('2d'));
    }
  });

  useEffect(() => {
    if (isLoadImage && ctx) {
      createImageInCanvas();
    }
  }, [isLoadImage, createImageInCanvas, ctx]);

  useUpdateEffect(() => {
    loadImage();

    return () => {
      image.src = '';
      image.onload = null;
      image.onerror = null;
    };
  }, [image.onerror, image.onload, image.src, loadImage]);

  if (isLoading || !isLoadImage) {
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
      <Filters
        image={image}
        ctx={ctx}
        resetImageSetting={createImageInCanvas}
      />
    </Wrapper>
  );
};
