import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.palette.textColor};
    background-color: ${props => props.theme.palette.primary};
    background-image: url('/media/images/background-figures.png');
    background-size: cover;
    margin: 0;
  }

  * {
    font-family: 'Poppins';
    box-sizing: border-box;
  }
`;