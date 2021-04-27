import styled from 'styled-components';
import { StyledTypes } from '../../../assets/styles/theme';
import '../../../assets/styles/_fonts.css';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto 1fr minmax(60px, auto);
  min-height: 100vh;
`;

type Blur = {
  blur: boolean;
};

interface Frid extends Blur {
  pathName: string;
}
// export const Grid = styled.div<Frid>`
//   display: grid;
//   grid-template-columns: 2fr 0.8fr;
//   grid-template-rows: auto 1fr auto auto;
//   grid-gap: 50px;
//   grid-row: 4;
//   width: 100%;
//   padding: ${({ pathName }) => (pathName === '/posts' ? '0px 30px' : '80px 30px')};
//   margin: 0 auto;
//   max-width: 1250px;
//   filter: ${({ blur }) => (blur ? `blur(5px)` : `blur(0px)`)};
//   @media (max-width: 820px) {
//     grid-template-rows: auto 1fr 100px auto;
//   }
// `;

// export const Search = styled.div`
//   grid-row: 1;
//   grid-column: 1/-1;
//   font-size: 23px;
//   display: flex;
//   align-items: center;
//   /* justify-content: space-around; */
//   /* max-width: 1250px; */
//   /* padding: 35px 30px; */
// `;

export const Footer = styled.footer<Blur>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: StyledTypes) => theme.colors.black};
  color: white;
  grid-row: 5;
  font-size: 15px;
  filter: ${({ blur }) => (blur ? `blur(5px)` : `blur(0px)`)};

  @media (max-width: 550px) {
    font-size: 10px;
  }
`;
