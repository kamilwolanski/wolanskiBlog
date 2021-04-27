import styled from 'styled-components';
import { StyledTypes } from '../../../assets/styles/theme';

export const WrapperAside = styled.div<StyledTypes>`
  box-shadow: 0.2px 6px 9px -5px rgb(0 0 0 / 100%);
  grid-row: 2;
  grid-column: 2/3;
  place-self: baseline;
  border-radius: 5px;
  background-color: ${({ theme }: StyledTypes) => theme.colors.white};
  overflow: hidden;
  padding: 5px 25px 25px;

  @media (max-width: 820px) {
    grid-row: 4;
    grid-column: 1/-1;
    padding: 5px 60px 25px;
  }

  @media (max-width: 650px) {
    padding: 5px 25px 25px;
  }

  h3 {
    font-family: 'Oswald', sans-serif;
    font-size: ${({ theme }: StyledTypes) => theme.fontSize.l};
    margin: 20px 0;
    text-transform: uppercase;

    @media (min-width: 1800px) {
      font-size: ${({ theme }: StyledTypes) => theme.fontSize.xl};
    }
    @media (max-width: 820px) {
      font-size: ${({ theme }: StyledTypes) => theme.fontSize.xl};
    }
    @media (max-width: 650px) {
      font-size: ${({ theme }: StyledTypes) => theme.fontSize.l};
    }
  }
`;
