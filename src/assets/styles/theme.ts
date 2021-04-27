export const theme = {
  colors: {
    white: '#FFFFFF',
    lightGrey: '#F5F5F5',
    grey: '#e2e2e2',
    darkGrey: '#707070',
    royalBlue: '#2c5ae4',
    lightBlack: '#363636',
    black: '#1d1d1d',
  },
  fontSize: {
    xxl: '38px',
    xl: '32px',
    l: '25px',
    m: '20px',
    sm: '16px',
    s: '11px',
    xs: '8px',
    xxs: '5px',
  },
};

export type ThemeType = typeof theme;

export interface StyledTypes {
  theme: ThemeType;
}
