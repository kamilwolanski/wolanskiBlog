import styled from 'styled-components';
import { StyledTypes } from '../assets/styles/theme';
import './../assets/styles/_fonts.css';

type Blur = {
  blur: boolean;
};

export const ContactWrapper = styled.div<Blur>`
  display: flex;
  align-items: center;
  grid-row: 2/5;
  padding: 50px 0;
  margin: 0 auto;
  text-align: center;
  max-width: 1350px;
  filter: ${({ blur }) => (blur ? `blur(5px)` : `blur(0px)`)};

  @media (max-width: 820px) {
    flex-direction: column;
  }

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-column: 1;

    @media (max-width: 820px) {
      margin-bottom: 40px;
    }

    h2 {
      font-size: ${({ theme }: StyledTypes) => theme.fontSize.xl};

      @media (min-width: 1800px) {
        font-size: ${({ theme }: StyledTypes) => theme.fontSize.xxl};
      }

      @media (max-width: 500px) {
        font-size: ${({ theme }: StyledTypes) => theme.fontSize.l};
      }
    }
    p {
      width: 60%;
      font-size: ${({ theme }: StyledTypes) => theme.fontSize.m};
      @media (min-width: 1800px) {
        font-size: ${({ theme }: StyledTypes) => theme.fontSize.l};
      }
      @media (max-width: 500px) {
        width: 80%;
        font-size: ${({ theme }: StyledTypes) => theme.fontSize.sm};
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 20px 50px;
    width: 80%;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0.2px 6px 9px -5px rgb(0 0 0);
  }

  input {
    border-radius: 5px;
    border: 1px solid black;
    padding: 5px 3px;
  }

  label {
    text-align: start;
    /* margin-top: 20px; */
    font-family: 'Oswald', sans-serif;
  }

  .error {
    width: 100%;
    font-size: 12px;
    color: #ff6562;
    text-align: initial;
  }

  textarea {
    resize: vertical;
    min-height: 150px;
    max-height: 200px;
    margin: 8px 0;
    padding: 5px;
    border: 1px solid black;
  }

  button {
    margin-top: 25px;
    padding: 10px 20px;
    align-self: center;
  }
`;
