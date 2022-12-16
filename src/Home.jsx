import React from 'react';
import Banner from 'pages/Banner/Banner';
import BubblyWhy from 'pages/BubbleWhy/BubbleWhy';
import BubbleDao from 'pages/BubbleDao/BubbleDao';
import BubbleTreasury from 'pages/BubbleTreasury/BubbleTreasury';
import BubbleYield from 'pages/BubbleYield/BubbleYield';
import BubbleContract from 'pages/BubbleContract/BubbleContract';
// import BubbleNomics from 'pages/BubbleNomics/BubbleNomics';
import Header from 'layout/Header/Header';
import Footer from 'layout/Footer/Footer';

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <BubblyWhy />
      <BubbleDao />
      <BubbleTreasury />
      <BubbleYield />
      <BubbleContract />
      {/* <BubbleNomics /> */}
      <Footer />
    </>
  );
}

export default Home;
