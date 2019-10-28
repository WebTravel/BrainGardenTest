import React, { useState, useRef } from 'react';
import { useUpdateEffect, useClickAway } from 'react-use';
import styled from 'styled-components';
import { ChromePicker } from 'react-color';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import { Content } from '@components/UI/Content';

const ColorPicker = styled.div`
  position: relative;
`;

const ColorsPallet = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
`;

const OpacityWrapper = styled.div`
  max-width: 600px;
  margin-top: 15px;
`;

const INIT_OPACITY_VALUE = 100;

export const Filters = ({
  ctx,
  resetImageSetting = Function.prototype,
  image,
}) => {
  const [isVisibleColorPicker, setIsVisibleColorPicker] = useState(false);
  const [opacity, setOpacity] = useState(INIT_OPACITY_VALUE);
  const [selectedColor, setSelectedColor] = useState(null);
  const colorPalletRef = useRef(null);
  const handleClickPickColor = () => {
    setIsVisibleColorPicker(!isVisibleColorPicker);
  };
  const handleChangeImage = color => {
    ctx.globalCompositeOperation = 'color';
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, image.width, image.height);
    ctx.globalCompositeOperation = 'source-atop';
  };

  const handleClickResetButton = () => {
    resetImageSetting();
    setIsVisibleColorPicker(false);
    setSelectedColor(null);
    setOpacity(INIT_OPACITY_VALUE);
  };

  const handleChangeColor = ({ rgb }) => {
    setSelectedColor(`rgba(${Object.values(rgb).join(',')})`);
  };

  const handleOpacityChange = (_, value) => {
    setOpacity(value);
  };

  useUpdateEffect(() => {
    if (selectedColor) {
      handleChangeImage(selectedColor);
    }
  }, [selectedColor, handleChangeImage]);

  useUpdateEffect(() => {
    ctx.save();
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalAlpha = opacity / 100;
    ctx.drawImage(image, 0, 0, ctx.canvas.width, ctx.canvas.height);

    if (selectedColor) {
      handleChangeImage(selectedColor);
    }

    ctx.restore();
  }, [opacity]);

  useClickAway(colorPalletRef, () => {
    setIsVisibleColorPicker(false);
  });

  return (
    <>
      <Content.Grid gap={20} template="repeat(3, minmax(120px, max-content))">
        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={() => setSelectedColor('#000')}
          disabled={!!selectedColor}
        >
          Черно-белое
        </Button>
        <ColorPicker ref={colorPalletRef}>
          <Button
            type="button"
            color="secondary"
            variant="contained"
            onClick={handleClickPickColor}
            disabled={!!selectedColor}
          >
            Выбрать цвет
          </Button>
          {isVisibleColorPicker && (
            <ColorsPallet>
              <ChromePicker
                color={selectedColor || 'red'}
                onChange={handleChangeColor}
              />
            </ColorsPallet>
          )}
        </ColorPicker>
        <Button
          type="button"
          variant="contained"
          onClick={handleClickResetButton}
          disabled={selectedColor === null && opacity === INIT_OPACITY_VALUE}
        >
          Сбросить все настройки
        </Button>
      </Content.Grid>
      <OpacityWrapper>
        <Content.SmallTitle>Прозрачность</Content.SmallTitle>
        <Slider
          defaultValue={opacity}
          value={opacity}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={100}
          onChange={handleOpacityChange}
        />
      </OpacityWrapper>
    </>
  );
};
