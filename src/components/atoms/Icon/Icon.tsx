import React, { ReactNode } from 'react';
import { Wrapper } from './Icon.styles';

interface IconI {
  iconSize?: number;
}

const Icon: React.FC<IconI> = ({ children, iconSize = 25 }) => {
  const wrapperWidth = iconSize * 1.5;
  return (
    <Wrapper className="icon" iconSize={iconSize} wrapperWidth={wrapperWidth}>
      {children}
    </Wrapper>
  );
};

export default Icon;
