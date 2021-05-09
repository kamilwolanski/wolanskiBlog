import styled from 'styled-components';
import { StyledTypes } from '../../../assets/styles/theme';
import '../../../assets/styles/_fonts.css';

export const AboutAuthorWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .author-portrait {
    width: 250px;
    height: 300px;
    border-radius: 10px;
    overflow: hidden;

    @media (min-width: 1800px) {
      width: 300px;
      height: 350px;
    }

    @media (max-width: 1100px) {
      width: 200px;
      height: 250px;
    }
    @media (max-width: 892px) {
      width: 180px;
      height: 230px;
    }
    @media (max-width: 820px) {
      width: 300px;
      height: 350px;
    }

    @media (max-width: 650px) {
      width: 250px;
      height: 300px;
    }

    img {
      width: 100%;
      height: 100%;
      object-position: 0px -30px;
      object-fit: cover;
    }
  }

  p {
    margin: 20px 0;
    line-height: 22px;
    font-size: ${({ theme }: StyledTypes) => theme.fontSize.sm};

    @media (min-width: 1800px) {
      font-size: ${({ theme }: StyledTypes) => theme.fontSize.m};
    }
  }
`;
