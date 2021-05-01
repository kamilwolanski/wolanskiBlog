import styled from 'styled-components';
import { StyledTypes } from '../../../assets/styles/theme';
import '../../../assets/styles/_fonts.css';

export const PaginationWrapper = styled.div`
  grid-column: 1;
  margin: 0 auto;

  @media (max-width: 820px) {
    grid-column: 1/-1;
    display: flex;
    align-items: center;
    grid-row: 3;
    padding: 40px 0;
  }
`;

type paginationBtnTypes = {
  disabled: boolean;
};
export const PaginationBtn = styled.button<paginationBtnTypes>`
  margin: 0 4px;
  border-radius: 50%;
  background-color: ${({ disabled, theme }) => (disabled ? theme.colors.lightBlack : '#e2e2e2')};
  color: ${({ disabled, theme }) => theme.colors.lightBlack};
  width: 30px;
  height: 30px;
  border: none;
  font-family: 'Oswald', sans-serif;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.lightBlack};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const PrevNextBtn = styled.button`
  border: none;
  background-color: transparent;
  font-family: 'Oswald', sans-serif;
  text-decoration: underline;
  font-size: ${({ theme }: StyledTypes) => theme.fontSize.sm};
  margin: 0 8px;
  cursor: pointer;
`;
