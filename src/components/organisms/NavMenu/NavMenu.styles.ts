import styled from 'styled-components';
import { StyledTypes } from '../../../assets/styles/theme';

type NavMenuWrapperT = {
  isOpen: boolean;
};

const widthNavMenu = '400px';
export const NavMenuWrapper = styled.div<NavMenuWrapperT>`
  position: fixed;
  top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${widthNavMenu};
  right: ${({ isOpen }) => (isOpen ? 0 : `-${widthNavMenu}`)};
  height: 100vh;
  background-color: ${({ theme }: StyledTypes) => theme.colors.lightBlack};
  color: ${({ theme }: StyledTypes) => theme.colors.lightGrey};
  font-size: ${({ theme }: StyledTypes) => theme.fontSize.m};
  text-transform: uppercase;
  text-align: center;
  z-index: 2;
  transition: 0.7s;

  @media (max-width: 820px) {
    width: 100%;
    right: ${({ isOpen }) => (isOpen ? 0 : `-100%`)};
  }

  .selected {
    color: #6a8fff;
  }

  li {
    margin: 15px 0;
    transition: color 0.2s;
    list-style: none;

    :hover {
      color: #6a8fff;
    }
  }
`;
