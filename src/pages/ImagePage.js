import React from 'react';
import { Image } from '@features/Image';
import { Content } from '@components/UI/Content';

const ImagePage = ({ match: { params } }) => (
  <Content.Container>
    <Content.PageTitle>Редактирование</Content.PageTitle>
    <Image name={params.name} />
  </Content.Container>
);

export default ImagePage;
