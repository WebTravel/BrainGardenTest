import styled from 'styled-components';

const Title = styled.h1`
  padding-top: 10px;
  margin: 0 0 10px;
  font-size: ${({ theme }) => theme.fonts.size.l};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
`;

const SmallTitle = styled.h3`
  margin: 0 0 10px;
  font-size: ${({ theme }) => theme.fonts.size.m};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
`;

const PageTitle = styled(Title)`
  margin: 0 0 25px;
  text-align: left;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ template }) =>
    template || 'repeat(auto-fill, minmax(0, 1fr)'};
  grid-gap: ${({ gap }) => `${gap || 20}px`};
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Content = {
  Title,
  PageTitle,
  SmallTitle,
  Grid,
  Container,
};
