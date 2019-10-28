import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Image } from '@features/Image';
import { Content } from '@components/UI/Content';
import { Icon } from '@components/UI/Icon';
import { ROUTES } from '@common/constants';
import { addHoverOpacity } from '@styles/placeholders';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  ${addHoverOpacity};
`;

const LinkText = styled.span`
  padding-left: 10px;
`;

const ImagePage = ({ match: { params } }) => (
  <Content.Container>
    <Content.PageTitle>Редактирование</Content.PageTitle>
    <StyledLink to={ROUTES.HOME}>
      <Icon name="arrow-back" />
      <LinkText>Вернуться к списку</LinkText>
    </StyledLink>
    <Image name={params.name} />
  </Content.Container>
);

export default ImagePage;
