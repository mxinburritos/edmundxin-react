import React from 'react';
import ReactDOM from 'react-dom';
import {
  ThemeProvider,
  CssBaseline,
} from '@material-ui/core';

import App from './App';

import './index.css';

// const colorTheme = createMuiTheme({
// 	palette: {
// 		type: "dark",
// 	},
// });

ReactDOM.render(
  <ThemeProvider>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
