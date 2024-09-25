import React from 'react';

import GlobalStyle from './global/global';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
import HomeIcon from './pages/home/HomeIcon';



function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HomeIcon />
    </ThemeProvider>
  </>
  );
}

export default App;
