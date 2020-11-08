import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';

import Uaifood from './features';

import './App.css';

const App = () => {
  const theme = createMuiTheme({
    breakpoints: {
      values: {
        md: 1024,
      },
    },
    palette: {
      primary: {
        main: '#39B54A',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Uaifood />
    </ThemeProvider>
  );
};

export default App;
