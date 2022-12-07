import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Colors from 'assets/styling/colors';
import Banner from 'pages/Banner/Banner';
import BubblyWhy from 'pages/BubbleWhy/BubbleWhy';
import BubbleDao from 'pages/BubbleDao/BubbleDao';
import BubbleTreasury from 'pages/BubbleTreasury/BubbleTreasury';
import BubbleYield from 'pages/BubbleYield/BubbleYield';
import BubbleContract from 'pages/BubbleContract/BubbleContract';

function App() {
  return (
    <>
      <GlobalStyle />
      <BodyOverflow />
      <Banner />
      <Wrapper>
        <BubblyWhy />
        <BubbleDao />
        <BubbleTreasury />
        <BubbleYield />
        <BubbleContract />
      </Wrapper>
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

const Wrapper = styled.div`
  width: 100%;
  padding: 0 4rem;
`;
