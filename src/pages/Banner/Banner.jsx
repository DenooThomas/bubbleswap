import React from 'react';
import styled from 'styled-components';
import bubble from 'assets/images/bubble.png';
import { flexColumn, flexRow } from 'assets/styling/flexer';
import { ButtonGlow } from 'assets/styling/button';
import BubbleAnimation from './BubbleAnimation/BubbleAnimation';
import Navbar from './Navbar/Navbar';

function Banner() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Title>Bubble liquid dex trading</Title>
        <BannerContent>
          <SubTitle>
            Bubble generates deeper liquidity for optimal trading experience.
            Liquidity is secured by perpetually burning LP tokens
            and + and incentivizing higher rewards for LP providers.
          </SubTitle>
          <ButtonGlow type="button">Join presale</ButtonGlow>
        </BannerContent>
        <BubbleAnimation />
        <BubbleLeft src={bubble} alt="bubble" />
        <BubbleRight src={bubble} alt="bubble" />
      </Wrapper>
    </>
  );
}

export default Banner;

const Wrapper = styled.div`
  ${flexColumn('nowrap', 'flex-start', 'center')};
  width: 100%;
  margin-bottom: 6rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  margin-bottom: 2rem;
`;

const BannerContent = styled.div`
  ${flexRow('nowrap', 'center', 'center')};
  width: 100%;
  height: 75px;
  margin-bottom: 2rem;
  z-index: 2;
`;

const SubTitle = styled.h2`
  max-width: 700px;
  text-align: justify;
  display: inline-block;
  vertical-align: center;
  font-size: 1rem;
  font-weight: 200;
  text-align: center;
  margin-right: 1.5rem;
`;

const BubbleLeft = styled.img`
  position: absolute;
  top: 100px;
  left: -550px;
  z-index: 1;
`;

const BubbleRight = styled.img`
  position: absolute;
  top: -580px;
  right: -570px;
  transform: rotate(110deg);
  z-index: 1;
`;
