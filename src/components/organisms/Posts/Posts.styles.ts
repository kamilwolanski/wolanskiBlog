import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-row: 2/3;

  @media (max-width: 820px) {
    grid-column: 1/-1;
  }
`;
