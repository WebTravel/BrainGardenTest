import React from 'react';
import styled from 'styled-components';
import { Gallery } from '@features/Gallery';
import { Content } from '@components/UI/Content';
import Link from '@material-ui/core/Link';
import { history } from '@src/history';
import { ROUTES } from '@common/constants';

const LinkWrapper = styled.div`
  display: inline-block;
  margin-bottom: 10px;
`;

const HomePage = () => (
  <Content.Container>
    <Content.PageTitle>Галерея</Content.PageTitle>
    <LinkWrapper>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link
        component="button"
        variant="body2"
        onClick={() => history.push(ROUTES.UPLOAD_IMAGE)}
      >
        Загрузить изображение
      </Link>
    </LinkWrapper>
    <Gallery />
  </Content.Container>
);

export default HomePage;
