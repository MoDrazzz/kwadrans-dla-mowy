import { ThemeProvider } from 'styled-components';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import theme from 'styles/theme';
import GlobalStyle from 'styles/GlobalStyle';
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
