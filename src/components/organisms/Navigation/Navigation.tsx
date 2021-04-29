import React, { useContext, useEffect, useRef, useState } from 'react';
import { Nav } from './Navigation.styles';
import Logo from '../../molecules/Logo/Logo';
import IconsContainer from '../../molecules/IconsContainer/IconsContainer';
import HamburgerMenu from '../../atoms/HamburgerMenu/HamburgerMenu';
import { Link } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';
import { NavContext } from '../../../providers/NavProvider';

const Navigation = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { isOpen, setIsOpen } = useContext(NavContext);

  // console.log(isOpen);

  useEffect(() => {
    function closeMenu(e: any) {
      if (navRef.current) {
        if (navRef.current.contains(e.target)) {
          return;
        }
      }

      setIsOpen(false);
    }
    window.addEventListener('click', closeMenu, true);

    return () => {
      window.removeEventListener('click', closeMenu, true);
    };
  }, []);

  return (
    <Nav ref={navRef} id="confirm">
      <IconsContainer />
      <Link to="/posts" onClick={() => setIsOpen(false)}>
        <Logo />
      </Link>
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </Nav>
  );
};

export default Navigation;
