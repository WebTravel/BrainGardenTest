import React from 'react';
import { Image } from '@features/Image';
import { Content } from '@components/UI/Content';
import { BackLink } from '@components/UI/BackLink';
import { ROUTES } from '@common/constants';

const ImagePage = ({ match: { params } }) => (
  <Content.Container>
    <Content.PageTitle>Редактирование</Content.PageTitle>
    <BackLink to={ROUTES.HOME} />
    <Image name={params.name} />
  </Content.Container>
);

export default ImagePage;
