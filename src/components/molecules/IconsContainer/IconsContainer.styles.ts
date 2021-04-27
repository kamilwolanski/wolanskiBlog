import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

  .icon {
    margin: 0 5px;

    @media (max-width: 500px) {
      margin: 0 3px;
    }
  }
`;
