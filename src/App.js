import React from 'react';
//Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Header from './Components/Header';
import Home from './Components/Home';
import Movie from './Components/Movie';
import NotFound from './Components/NotFound';

// global styles
import { GlobalStyle } from './GlobalStyle';


const App = () => (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );


export default App;
