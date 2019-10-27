import React, { useState } from 'react';
import { useUpdateEffect } from 'react-use';
import styled from 'styled-components';
import { SketchPicker } from 'react-color';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Filters = ({
  ctx,
  resetImageSetting = Function.prototype,
  image,
}) => {
  const [withFilter, setWithFilter] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [isVisibleColorPicker, setIsVisibleColorPicker] = useState(false);
  const handleClickPickColor = () => {
    setIsVisibleColorPicker(!isVisibleColorPicker);
  };
  const handleChangeImage = (color = '#000') => {
    ctx.globalCompositeOperation = 'saturation';
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, image.width, image.height);
    ctx.globalCompositeOperation = 'source-over';

    setWithFilter(true);
  };

  const handleClickResetButton = () => {
    resetImageSetting();
    setWithFilter(false);
  };

  useUpdateEffect(() => {
    handleChangeImage(selectedColor);
  }, [selectedColor]);

  return (
    <>
      <Wrapper>
        <button type="button" onClick={handleChangeImage} disabled={withFilter}>
          Черно-белое изображение
        </button>
        <button
          type="button"
          onClick={() => {
            ctx.globalAlpha = 0.5;
          }}
        >
          Сделать прозрачным
        </button>
        <button type="button" onClick={handleClickPickColor}>
          Pick Color
        </button>
        <button type="button" onClick={handleClickResetButton}>
          Сбросить все настройки
        </button>
      </Wrapper>
      {isVisibleColorPicker && (
        <SketchPicker
          onChange={({ hex }) => {
            setSelectedColor(hex);
          }}
        />
      )}
    </>
  );
};
