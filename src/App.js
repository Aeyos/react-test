import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './themes/default.js';
import Register from './components/Register';
import Page from './components/Page';

import './IconLib';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Page>
          <Register />
        </Page>
      </ThemeProvider>
    );
  }
}

export default App;
