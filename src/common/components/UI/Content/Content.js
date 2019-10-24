import styled from 'styled-components';
import { grayCaption } from '@styles/placeholders';

const Title = styled.h1`
  margin: 0 0 10px;
  font-size: ${({ theme }) => theme.fonts.size.l};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.cloudyBlue};
  text-align: center;
  text-transform: uppercase;
`;

const DashedTitle = styled.h2`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin: 0;
  font-size: ${({ theme }) => theme.fonts.size.default};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  text-transform: uppercase;

  &::after {
    flex-grow: 1;
    margin-left: 20px;
    content: '';
    border-top: 4px dashed ${({ theme }) => theme.colors.darkGreyBlue};
  }
`;

const PageTitle = styled(Title)`
  margin: 0 0 40px;
  text-align: left;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ template }) =>
    template || 'repeat(auto-fill, minmax(0, 1fr)'};
  grid-gap: ${({ gap }) => `${gap || 20}px`};
  width: 100%;
`;

const Caption = styled.div`
  ${grayCaption};
`;

export const Content = { Title, DashedTitle, PageTitle, Grid, Caption };
