import React from 'react';

import GlobalStyle from './styles/global';
import Routers from './routes'

import './App.css';

function App() {
  return (
    <>
      <Routers />

      <GlobalStyle />
    </>
  );
}

export default App;
