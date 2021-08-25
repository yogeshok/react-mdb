import React from 'react';
// Components
import Header from './Components/Header';
import Home from './Components/Home';

// global styles
import { GlobalStyle } from './GlobalStyle';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
