import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.colors.dark};
  }

  a:link {
    text-decoration: inherit;
    color: inherit;
    cursor: pointer;
  }

  a:visited {
    text-decoration: inherit;
    color: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyle;
