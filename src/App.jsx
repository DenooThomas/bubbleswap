import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Colors from 'assets/colors/colors';
import Banner from 'pages/Banner/Banner';

function App() {
  return (
    <>
      <GlobalStyle />
      <BodyOverflow />
      <Banner />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    color: ${Colors.white};
    list-style-type: none;
  }
`;

const BodyOverflow = createGlobalStyle`
 body {
  overflow-x: hidden;
  background-color: ${Colors.black};
 }
`;
