import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';

import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;

    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Lato', sans-serif;

    color: ${({ theme }) => theme.colors.contrastText};
  }

  html, body {
    height: 100vh;
  }

  #__next {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
