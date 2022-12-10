import React from 'react';
import styled from 'styled-components';
import GlobalStyle from 'assets/styling/globalStyle';
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
      <Banner />
      <Wrapper>
        <BubblyWhy />
        <BubbleDao />
        <BubbleTreasury />
      </Wrapper>
      <BubbleYield />
      <Wrapper>
        <BubbleContract />
        <BubbleNomics />
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  padding: 0 4vw;
`;
