import React, { Dispatch, SetStateAction, useState } from 'react';

export interface initialStateModel {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const initialState: initialStateModel = {
  isOpen: false,
  setIsOpen: () => dispatchEvent,
};
export const NavContext = React.createContext<initialStateModel>(initialState);

const NavProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return <NavContext.Provider value={{ isOpen, setIsOpen }}>{children}</NavContext.Provider>;
};

export default NavProvider;
