import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  grid-row: 2/3;

  .loader {
    height: 100vh;
  }

  @media (max-width: 820px) {
    grid-column: 1/-1;
  }
`;
