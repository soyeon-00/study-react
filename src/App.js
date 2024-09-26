import React from 'react';

import GlobalStyle from './global/global';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
import AnimalsContainer from './docs/day04/context/expert/AnimalsContainer';
// import ParentContainer from './docs/day04/context/normal/ParentContainer';
// import ParentContainer from './docs/day04/context/basic/ParentContainer';
// import HomeIcon from './pages/home/HomeIcon';
// import PowButton from './pages/home/PowButton';
// import CharContainer from './docs/day04/context/basic/CharContainer';



function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <HomeIcon /> */}
      {/* <PowButton /> */}
      {/* <CharContainer /> */}
      {/* <ParentContainer /> */}
      <AnimalsContainer />
    </ThemeProvider>
  </>
  );
}

export default App;
