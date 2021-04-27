import styled from 'styled-components';

export const SearchWrapper = styled.div`
  grid-row: 1;
  grid-column: 1/-1;
  font-size: 23px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  justify-items: center;

  .search {
    display: flex;
    align-items: center;
  }

  p {
    margin: 20px 0;

    @media (max-width: 820px) {
      text-align: center;
    }
  }
  /* justify-content: space-around; */
  /* max-width: 1250px; */
  /* padding: 35px 30px; */
`;

// interface InputStyledI {
//   paddingtb?: number | string;
//   paddinglr?: number | string;
//   margintb?: number | string;
//   marginlr?: number | string;
//   width?: number | string;
//   fontSize?: number | string;
// }
// export const InputStyled = styled.input<InputStyledI>`
//   padding: ${({ paddingtb = 0, paddinglr = 0 }) => `${paddingtb}px ${paddinglr}px`};
//   margin: ${({ margintb = 0, marginlr = 0 }) => `${margintb}px ${marginlr}px`};
//   border-radius: 5px;
//   border: 2px solid black;
//   width: ${({ width = 200 }) => `${width}px`};
//   font-size: ${({ fontSize = 15 }) => `${fontSize}px`};
// `;
