import React from 'react';
import { LogoWrapper, IconWrapper } from './Logo.styles';
import programmerImg from '../../../assets/images/programmer.svg';
const Logo = () => {
  return (
    <LogoWrapper>
      <IconWrapper>
        <img src={programmerImg} alt="" />
      </IconWrapper>
      <span className="logo__text">{`WolanskiBlog`}</span>
    </LogoWrapper>
  );
};

export default Logo;
