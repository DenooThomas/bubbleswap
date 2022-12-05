import React from 'react';
import styled from 'styled-components';
import bubble from 'assets/images/bubble.png';
import { flexColumn, flexRow } from 'assets/styling/flexer';
import BubbleAnimation from './BubbleAnimation/BubbleAnimation';
import Navbar from '../../components/Navbar/Navbar';

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
  ${flexColumn('nowrap', 'center', 'center')};
  width: 100vw;
  padding: 0 60px;
`;

const Title = styled.h1`
  font-size: 4rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  margin-bottom: 40px;
`;

const BannerContent = styled.div`
  ${flexRow('nowrap', 'center', 'baseline')};
  width: 100%;
  height: 75px;
  z-index: 2;
`;

const SubTitle = styled.h2`
  width: 60%;
  text-align: justify;
  display: inline-block;
  vertical-align: center;
  font-size: 1rem;
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
  box-shadow: 0px 2px 5px 1px rgba(241,83,174,1);
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
