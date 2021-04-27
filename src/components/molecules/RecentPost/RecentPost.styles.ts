import styled from 'styled-components';
import { StyledTypes } from '../../../assets/styles/theme';
export const RecentPostWrapper = styled.li`
  margin: 8px 0;
  padding: 5px;
  border-radius: 5px;
  list-style: none;

  @media (max-width: 650px) {
    margin: 5px 0;
  }

  p {
    font-size: ${({ theme }: StyledTypes) => theme.fontSize.sm};

    @media (min-width: 1800px) {
      font-size: ${({ theme }: StyledTypes) => theme.fontSize.m};
    }
  }

  :hover {
    background-color: ${({ theme }: StyledTypes) => theme.colors.grey};
  }

  .recentPost-title {
    font-weight: 700;
  }

  .recentPost-data {
    span {
      margin-right: 5px;
    }
  }
`;
