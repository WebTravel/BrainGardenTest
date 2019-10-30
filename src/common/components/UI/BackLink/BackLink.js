import React, { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { addHoverOpacity } from '@styles/placeholders';
import { Icon } from '@components/UI/Icon';

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

export const BackLinkComponent = ({ to }) => (
  <StyledLink to={to}>
    <Icon name="arrow-back" />
    <LinkText>Вернуться к списку</LinkText>
  </StyledLink>
);

export const BackLink = memo(BackLinkComponent);
