import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './themes/default.js';
import Register from './components/Register';
import Page from './components/Page';

import logo from './logo.svg';
import './App.css';

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
