import styled from 'styled-components';
import { StyledTypes } from '../../../assets/styles/theme';
import '../../../assets/styles/_fonts.css';
export const Wrapper = styled.div<StyledTypes>`
  box-shadow: 1px 5px 15px -5px rgb(0 0 0 / 100%);
  border-radius: 5px;
  background-color: ${({ theme }: StyledTypes) => theme.colors.white};
  overflow: hidden;
  margin: 50px 0;

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }

  .post-info {
    display: flex;
    align-items: center;
    position: relative;
    padding-bottom: 10px;

    ::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 1.5px;
      margin: 0 auto;
      background-color: ${({ theme }: StyledTypes) => theme.colors.darkGrey};
    }
    &__published-date {
      padding: 25px;
      font-family: 'Oswald', sans-serif;
      line-height: 28px;
    }

    &__day {
      font-weight: 700;
      font-size: ${({ theme }) => theme.fontSize.xxl};

      @media (max-width: 650px) {
        font-size: ${({ theme }) => theme.fontSize.xl};
      }
    }

    &__month {
      font-size: ${({ theme }) => theme.fontSize.l};
      text-transform: capitalize;
      @media (max-width: 650px) {
        font-size: ${({ theme }) => theme.fontSize.m};
      }
    }
    &__year {
      display: block;
      font-size: ${({ theme }) => theme.fontSize.xxl};
      @media (max-width: 650px) {
        font-size: ${({ theme }) => theme.fontSize.xl};
      }
    }
    h2 {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      font-size: ${({ theme }) => theme.fontSize.xl};
      font-family: 'Oswald', sans-serif;

      @media (min-width: 1800px) {
        font-size: ${({ theme }) => theme.fontSize.xxl};
      }

      @media (max-width: 650px) {
        font-size: ${({ theme }) => theme.fontSize.l};
      }
    }
  }
`;

export const ImageWrapper = styled.div`
  height: 350px;

  @media (max-width: 600px) {
    height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    /* object-fit: contain; */
  }
`;

export const ContentWrapper = styled.div<StyledTypes>`
  padding: 20px 40px;

  p {
    margin: 13px 0;
  }

  a {
    color: blue;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 550px) {
    padding: 20px 20px;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.sm};
    line-height: 1.7;

    @media (min-width: 1800px) {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0 35px 0;
`;
