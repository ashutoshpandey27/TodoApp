import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background-color: #eee;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
  }
`;
