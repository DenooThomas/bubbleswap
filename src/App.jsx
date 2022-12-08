import React from 'react';
import styled from 'styled-components';
import { GlobalStyle, BodyOverflow } from 'assets/styling/globalStyle';
import Banner from 'pages/Banner/Banner';
import BubblyWhy from 'pages/BubbleWhy/BubbleWhy';
import BubbleDao from 'pages/BubbleDao/BubbleDao';
import BubbleTreasury from 'pages/BubbleTreasury/BubbleTreasury';
import BubbleYield from 'pages/BubbleYield/BubbleYield';
import BubbleContract from 'pages/BubbleContract/BubbleContract';
import BubbleNomics from 'pages/BubbleNomics/BubbleNomics';
import Footer from 'pages/Footer/Footer';

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
        <BubbleNomics />
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 4rem;
`;
