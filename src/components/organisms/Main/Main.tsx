import React from 'react';
import { useLocation } from 'react-router';
import { MainWrapper } from './Main.styles';
interface MainI {
  blur: boolean;
}
const Main: React.FC<MainI> = ({ blur, children }) => {
  const { pathname } = useLocation();

  return (
    <MainWrapper pathName={pathname} blur={blur}>
      {children}
    </MainWrapper>
  );
};

export default Main;
