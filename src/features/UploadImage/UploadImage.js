import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { useSubmit } from '@common/hooks/useSubmit';
import { Loader } from '@components/UI/Loader';
import { useRequestCompleted } from '@common/hooks/useRequestCallback';
import { Error } from '@components/UI/Error';
import { history } from '@src/history';
import { ROUTES } from '@common/constants';
import { uploadImage } from './methods';

const Wrapper = styled.div`
  margin-top: 20px;
`;

const Label = styled.label`
  display: inline-block;
`;

const MAX_SIZE_IMAGE = 3000000;
const VALID_IMAGES_TYPES = ['image/jpg', 'image/jpeg'];

export const UploadImage = () => {
  const [handleSubmit, isLoading, error] = useSubmit(file => uploadImage(file));
  const [imageErrors, setImageErrors] = useState(error);

  useRequestCompleted(isLoading, error, () => {
    history.push(ROUTES.HOME);
  });

  const handleChangeFile = file => {
    if (!file) return false;

    const isValidSize = file.size <= MAX_SIZE_IMAGE;
    const isValidType = VALID_IMAGES_TYPES.includes(file.type);
    const isValidFile = isValidSize && isValidType;

    setImageErrors(null);

    if (!isValidType) {
      setImageErrors(
        'Некорректный тип файлы. Допустимые типы файлов: JPG, JPEG',
      );
    }

    if (!isValidSize) {
      setImageErrors(
        `Размер файла слишком большой. Максимально допустимый размер ${MAX_SIZE_IMAGE /
          1000 /
          1000}`,
      );
    }

    if (isValidFile) {
      return handleSubmit(file);
    }

    return isValidFile;
  };

  return (
    <Wrapper>
      <Label>
        <input
          style={{ display: 'none' }}
          type="file"
          onChange={({ target }) => handleChangeFile(target.files[0])}
        />
        <Button
          variant="outlined"
          component="span"
          type="button"
          disabled={isLoading}
        >
          Выбрать файл
        </Button>
      </Label>
      {isLoading && <Loader />}
      {imageErrors && <Error>{imageErrors}</Error>}
    </Wrapper>
  );
};
