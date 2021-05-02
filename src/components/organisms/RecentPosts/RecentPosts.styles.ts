import styled from 'styled-components';
import { StyledTypes } from '../../../assets/styles/theme';

export const RecentPostsWrapper = styled.div`
  .activePost {
    border-radius: 5px;
    background-color: ${({ theme }: StyledTypes) => theme.colors.grey};
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;

    a {
      margin: 8px 0;
    }

    @media (max-width: 820px) {
      align-items: center;
      text-align: center;
    }
  }
`;
