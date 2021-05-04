import React, { useContext } from 'react';
import { Wrapper, HeroContainer } from './HeroSection.styles';
import { NavContext } from '../../../providers/NavProvider';
const HeroSection = () => {
  const { isOpen } = useContext(NavContext);

  return (
    <HeroContainer blur={isOpen ? true : false}>
      <Wrapper blur={isOpen ? true : false}>
        <div className="welcome-text">
          <h1>Witaj na moim blogu</h1>
          <h2>Poznaj moje programistyczne projekty</h2>
        </div>
      </Wrapper>
    </HeroContainer>
  );
};

export default HeroSection;
