import styled from 'styled-components';
import { StyledTypes } from '../../../assets/styles/theme';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }: StyledTypes) => theme.fontSize.m};
  font-weight: bolder;
  color: ${({ theme }: StyledTypes) => theme.colors.lightBlack};

  .logo__circle {
    position: relative;
    background-color: white;
    border: 4px solid royalblue;
    border-radius: 50%;
    width: 80px;
    height: 80px;

    span {
      position: absolute;
      left: 50%;
      font-size: 26px;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .logo__text {
    padding: 0 10px;
    font-size: ${({ theme }: StyledTypes) => theme.fontSize.m};
    @media (max-width: 820px) {
      font-size: ${({ theme }: StyledTypes) => theme.fontSize.sm};
    }

    @media (max-width: 460px) {
      padding: 0;
    }
  }
`;

export const IconWrapper = styled.div`
  width: 45px;

  @media (max-width: 820px) {
    width: 40px;
  }

  @media (max-width: 370px) {
    width: 30px;
  }

  img {
    width: 100%;
  }
`;
