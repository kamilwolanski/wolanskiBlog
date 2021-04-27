import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;

  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.lightGrey};

  } 
  
  a, button {
    color: inherit;
    text-decoration: inherit;
    font-family: 'Montserrat', sans-serif;
  }

  ul, p {
    margin: 0;
    padding: 0;
  }

  /* li {
    list-style: none
  } */
`;
