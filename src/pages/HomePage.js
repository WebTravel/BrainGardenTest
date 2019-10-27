import React from 'react';
import { Gallery } from '@features/Gallery';
import { Content } from '@components/UI/Content';

const HomePage = () => (
  <Content.Container>
    <Content.PageTitle>Галерея</Content.PageTitle>
    <Gallery />
  </Content.Container>
);

export default HomePage;
