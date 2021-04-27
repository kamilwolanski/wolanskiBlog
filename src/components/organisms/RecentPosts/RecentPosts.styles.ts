import styled from 'styled-components';

export const RecentPostsWrapper = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 820px) {
      align-items: center;
      text-align: center;
    }
  }
`;
