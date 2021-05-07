import styled from 'styled-components';

export const SearchWrapper = styled.div`
  grid-row: 1;
  grid-column: 1/-1;
  font-size: 23px;
  position: relative;
  /* display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  justify-items: center; */

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
`;
