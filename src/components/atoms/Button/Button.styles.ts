import styled from 'styled-components';
import { FontSizesButton } from './Button';
interface ButtonI {
  fontSizeB: FontSizesButton;
  margintb: number | string;
  marginlr: number | string;
  type?: string;
  disabled?: boolean;
}

export const StyledButton = styled.button<ButtonI>`
  text-transform: uppercase;
  border-radius: 17px;
  padding: 7px 10px;
  margin: ${({ margintb, marginlr }) => `${margintb}px ${marginlr}px`};

  border: 1.7px solid ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme, fontSizeB }) => theme.fontSize[fontSizeB]};
  background-color: white;
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: ${({ disabled }) => (disabled ? 'inherit' : 'pointer')};
  transition: color, background-color 0.15s;
  opacity: ${({ disabled }) => (disabled ? '0.2' : '1')};

  :hover {
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.lightBlack};
  }

  [disabled]:hover {
  }
`;
