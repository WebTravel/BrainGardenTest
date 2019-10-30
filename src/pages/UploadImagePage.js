import React from 'react';
import { UploadImage } from '@features/UploadImage';
import { Content } from '@components/UI/Content';
import { BackLink } from '@components/UI/BackLink';
import { ROUTES } from '@common/constants';

const UploadImagePage = () => (
  <Content.Container>
    <Content.PageTitle>Загрузка изображения</Content.PageTitle>
    <BackLink to={ROUTES.HOME} />
    <UploadImage />
  </Content.Container>
);

export default UploadImagePage;
