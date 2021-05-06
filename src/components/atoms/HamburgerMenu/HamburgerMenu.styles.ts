import styled from 'styled-components';

export const StyledHamburgerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 80px; */
  height: 80px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: none;
  overflow: hidden;
`;
interface BurgerI {
  isOpen: boolean;
}
const burgerWidth = 25;
export const Burger = styled.div<BurgerI>`
  display: flex;
  width: ${burgerWidth}px;
  height: 3px;
  background-color: ${({ isOpen, theme }) => (isOpen ? 'transparent' : `${theme.colors.lightBlack}`)};
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? `translate(-50px)` : null)};
  @media (max-width: 550px) {
    height: 2px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: ${burgerWidth}px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.lightBlack};
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    @media (max-width: 550px) {
      height: 2px;
    }
  }

  &::before {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg) translate(35px, -35px)' : `translateY(-8px)`)};
  }

  &::after {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg) translate(35px, 35px)' : `translateY(8px)`)};
  }
`;
