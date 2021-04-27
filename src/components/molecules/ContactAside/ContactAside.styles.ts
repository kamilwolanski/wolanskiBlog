import styled from 'styled-components';
import { StyledTypes } from '../../../assets/styles/theme';

export const ContactAsideWrapper = styled.div`
  text-align: center;

  p {
    font-size: ${({ theme }: StyledTypes) => theme.fontSize.sm};
    font-weight: 700;

    @media (min-width: 1800px) {
      font-size: ${({ theme }: StyledTypes) => theme.fontSize.m};
    }
  }

  button {
    margin-top: 20px;
  }
`;
