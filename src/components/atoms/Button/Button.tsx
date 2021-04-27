import React from 'react';
import { StyledButton } from './Button.styles';

export enum FontSizesButton {
  XXL = 'xxl',
  XL = 'xl',
  L = 'l',
  M = 'm',
  SM = 'sm',
  S = 's',
  XS = 'xs',
  XXS = 'xxs',
}

type ButtonTypes = {
  fontSize?: FontSizesButton;
  margintb?: number | string;
  marginlr?: number | string;
  submit?: boolean;
  disabled?: boolean;
};
const Button: React.FC<ButtonTypes> = ({ children, fontSize = FontSizesButton.M, margintb = 0, marginlr = 0, submit, disabled }) => {
  // console.log(disabled);
  return (
    <StyledButton type={submit ? 'submit' : 'button'} disabled={disabled} fontSizeB={fontSize} margintb={margintb} marginlr={marginlr}>
      {children}
    </StyledButton>
  );
};

export default Button;
