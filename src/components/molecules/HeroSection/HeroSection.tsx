import React, { useContext, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Wrapper, HeroContainer } from './HeroSection.styles';
import { NavContext } from '../../../providers/NavProvider';
const HeroSection = () => {
  const { isOpen } = useContext(NavContext);

  const heroRef = useRef(null);
  useEffect(() => {
    gsap.from(heroRef.current, { duration: 1, opacity: 0 });
  }, []);

  return (
    <HeroContainer blur={isOpen ? true : false} ref={heroRef}>
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
