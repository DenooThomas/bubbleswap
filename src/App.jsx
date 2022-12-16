import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from 'assets/styling/globalStyle';
import Home from 'Home';
import NotFound from '404';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path=":slug/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
