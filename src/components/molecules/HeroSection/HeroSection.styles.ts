import styled from 'styled-components';
import img from '../../../assets/images/zzz.jpg';
import { StyledTypes } from '../../../assets/styles/theme';

type blur = {
  blur: boolean;
};
export const HeroContainer = styled.section<blur>`
  grid-row: 2;
  grid-column: 1/-1;
  overflow: hidden;
`;

export const Wrapper = styled.div<blur>`
  display: flex;
  justify-content: flex-start;
  padding: 20px 10px;
  background: rgb(245, 245, 245);
  background-image: linear-gradient(230deg, rgba(245, 245, 245, 0.15) 30%, rgba(63, 63, 63, 0.9139005944174545) 66%), url(${img});
  background-position: center;
  background-size: cover;
  height: 400px;
  transform: scaleX(1.01);
  filter: ${({ blur }) => (blur ? `blur(5px)` : `blur(0px)`)};

  @media (max-width: 1100px) {
    height: 300px;
    background-image: linear-gradient(230deg, rgba(245, 245, 245, 0.15) 0%, rgba(63, 63, 63, 0.9139005944174545) 66%), url(${img});
  }

  @media (max-width: 650px) {
    height: 250px;
  }

  @media (max-width: 550px) {
    height: initial;
    min-height: 100px;
    background-image: none;
  }

  .welcome-text {
    display: flex;
    flex-direction: column;
    margin-left: 110px;
    color: white;
    text-transform: uppercase;

    @media (max-width: 1100px) {
      margin: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @media (max-width: 550px) {
      padding-top: 20px;
    }
  }

  h1 {
    width: 700px;
    margin: 0;
    margin-top: 50px;
    font-family: 'Oswald', sans-serif;
    font-size: 80px;
    text-align: center;

    @media (max-width: 1100px) {
      width: 100%;
      font-size: 70px;
      margin: 0;
    }
    @media (max-width: 650px) {
      font-size: 50px;
    }
    @media (max-width: 550px) {
      font-size: 40px;
      color: black;
    }
    @media (max-width: 500px) {
      font-size: 35px;
    }
  }

  h2 {
    text-align: center;
    color: lightgray;
    @media (max-width: 650px) {
      font-size: ${({ theme }: StyledTypes) => theme.fontSize.m};
    }
    @media (max-width: 550px) {
      font-size: ${({ theme }: StyledTypes) => theme.fontSize.sm};
      color: gray;
    }
    @media (max-width: 500px) {
      font-size: ${({ theme }: StyledTypes) => theme.fontSize.s};
    }
  }
`;

export const SvgWrapper = styled.div`
  width: 26%;
  img {
    width: 100%;
    filter: drop-shadow(0 0 0.3rem white);
  }
`;
