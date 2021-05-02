import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

export interface initialStateModel {
  windowWidth: number;
  setWindowWidth?: Dispatch<SetStateAction<number>>;
}
const initialState: initialStateModel = {
  windowWidth: window.innerWidth,
  setWindowWidth: () => dispatchEvent,
};
export const WindowWidthContext = React.createContext<initialStateModel>(initialState);

const WindowWidthProvider: React.FC = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWindowWidth);

    return () => window.removeEventListener('resize', handleWindowWidth);
  }, []);

  const handleWindowWidth = (e: any) => {
    setWindowWidth(e.target.innerWidth);
  };

  return <WindowWidthContext.Provider value={{ windowWidth }}>{children}</WindowWidthContext.Provider>;
};

export default WindowWidthProvider;
