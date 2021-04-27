import React, { Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import { NavMenuWrapper } from './NavMenu.styles';

interface NavMenuI {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const NavMenu: React.FC<NavMenuI> = ({ isOpen, setIsOpen }) => {
  return (
    <NavMenuWrapper isOpen={isOpen}>
      <ul>
        <NavLink to="/posts" activeClassName="selected">
          <li onClick={() => setIsOpen(false)}>Blog</li>
        </NavLink>
        <NavLink to="/about-me" activeClassName="selected">
          <li onClick={() => setIsOpen(false)}>O mnie</li>
        </NavLink>
        <NavLink to="/contact" activeClassName="selected">
          <li onClick={() => setIsOpen(false)}>Kontakt</li>
        </NavLink>
      </ul>
    </NavMenuWrapper>
  );
};

export default NavMenu;
