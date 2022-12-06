import React from 'react';
import styled from 'styled-components';
import bubble from 'assets/images/bubble.png';
import { flexColumn, flexRow } from 'assets/styling/flexer';
import BubbleAnimation from './BubbleAnimation/BubbleAnimation';
import Navbar from './Navbar/Navbar';

function Banner() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Title>Bubble liquid dex trading</Title>
        <BannerContent>
          <SubTitle>
            Bubble generates deeper liquidity for optimal trading experience.
            Liquidity is secured by perpetually burning LP tokens
            and + and incentivizing higher rewards for LP providers.
          </SubTitle>
          <Button type="button">Join presale</Button>
        </BannerContent>
        <BubbleAnimation />
        <BubbleLeft src={bubble} alt="bubble" />
        <BubbleRight src={bubble} alt="bubble" />
      </Wrapper>
    </div>
  );
}

export default Banner;

const Wrapper = styled.div`
  ${flexColumn('nowrap', 'flex-start', 'center')};
  width: 100%;
  height: 100vh;
  padding: 0 4rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  margin-bottom: 2rem;
`;

const BannerContent = styled.div`
  ${flexRow('nowrap', 'center', 'baseline')};
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

const Button = styled.button`
  height: 50px;
  border: none;
  border-radius: 1.1rem;
  padding: 5px 35px;
  background: rgb(241,83,174);
  background: linear-gradient(145deg, rgba(241,83,174,1) 0%, rgba(238,80,45,1) 100%);
  box-shadow: 0px 2px 10px 1px rgba(241,83,174,1);
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1.7px;
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
