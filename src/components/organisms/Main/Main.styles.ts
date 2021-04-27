import styled from 'styled-components';

type Blur = {
  blur?: boolean;
};
interface Frid extends Blur {
  pathName?: string;
}
export const MainWrapper = styled.section<Frid>`
  display: grid;
  grid-template-columns: 2fr 0.8fr;
  grid-template-rows: auto 1fr auto;
  grid-gap: 45px;
  grid-row: 4;
  width: 100%;
  padding: ${({ pathName }) => (pathName === '/posts' ? '0px 30px' : '80px 30px')};
  /* padding: 0px 30px; */
  margin: 0 auto;
  max-width: 1250px;
  filter: ${({ blur }) => (blur ? `blur(5px)` : `blur(0px)`)};

  @media (min-width: 1800px) {
    max-width: 1400px;
  }
  @media (max-width: 820px) {
    grid-template-rows: auto 1fr auto auto;
  }

  @media (max-width: 550px) {
    padding: ${({ pathName }) => (pathName === '/posts' ? '0px 30px' : '50px 20px')};
  }

  @media (max-width: 460px) {
    padding: ${({ pathName }) => (pathName === '/posts' ? '0px 30px' : '50px 10px')};
  }
`;
