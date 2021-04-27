import styled from 'styled-components';
import { StyledTypes } from '../assets/styles/theme';

export const AboutMeWrapper = styled.div`
  box-shadow: 0.2px 6px 9px -5px rgb(0 0 0);
  padding: 40px 30px;
  grid-column: 1/-1;
  background-color: white;
  p {
    margin: 15px 0;
    font-size: ${({ theme }: StyledTypes) => theme.fontSize.m};
  }

  li {
    list-style: none;
    font-size: ${({ theme }: StyledTypes) => theme.fontSize.m};
    font-weight: 700;
  }
`;
