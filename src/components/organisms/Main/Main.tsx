import React from 'react';
import { MainWrapper } from './Main.styles';
interface MainI {
  blur: boolean;
}
const Main: React.FC<MainI> = ({ blur, children }) => {
  return <MainWrapper blur={blur}>{children}</MainWrapper>;
};

export default Main;
