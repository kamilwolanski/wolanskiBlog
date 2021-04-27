import styled from 'styled-components';
import { StyledTypes } from '../../../assets/styles/theme';

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  grid-row: 1/1;
  grid-column: 1/-1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }: StyledTypes) => theme.colors.white};
  width: 100%;
  padding: 0px 20px;
  z-index: 2;

  @media (max-width: 550px) {
    padding: 0px 5px;
  }
`;

export const IconsWrapper = styled.div``;
