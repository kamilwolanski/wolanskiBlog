import React, { Dispatch, SetStateAction, useState } from 'react';
import { StyledHamburgerMenu, Burger } from './HamburgerMenu.styles';

interface HamburgerMenuI {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const HamburgerMenu: React.FC<HamburgerMenuI> = ({ isOpen, setIsOpen }) => {
  return (
    <StyledHamburgerMenu onClick={() => setIsOpen((prev) => !prev)}>
      <Burger isOpen={isOpen} />
    </StyledHamburgerMenu>
  );
};

export default HamburgerMenu;
