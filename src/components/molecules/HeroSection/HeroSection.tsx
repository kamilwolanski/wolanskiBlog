import React, { useContext } from 'react';
import { Wrapper, SvgWrapper, HeroContainer } from './HeroSection.styles';
import img from '../../../assets/images/undraw_working_blue.svg';
import { NavContext } from '../../../providers/NavProvider';
const HeroSection = () => {
  const { isOpen } = useContext(NavContext);

  return (
    <HeroContainer blur={isOpen ? true : false}>
      <Wrapper blur={isOpen ? true : false}>
        <div className="welcome-text">
          <h1 style={{ textAlign: 'center', textTransform: 'uppercase', color: 'white' }}>Witaj na moim blogu</h1>
          <h2>Poznaj moje programistyczne projekty</h2>
        </div>
        {/* <SvgWrapper>
          <img src={img} alt="" />
        </SvgWrapper> */}
      </Wrapper>
    </HeroContainer>
  );
};

export default HeroSection;
