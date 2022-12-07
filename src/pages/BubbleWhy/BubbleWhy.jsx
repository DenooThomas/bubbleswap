import { flexColumn, flexRow } from 'assets/styling/flexer';
import React from 'react';
import styled from 'styled-components';
import { ButtonGlow } from 'assets/styling/button';
import bubble from 'assets/images/bubble.png';
import tickerImg from 'assets/images/ticker.png';

function BubbleWhy() {
  return (
    <Wrapper>
      <LeftCont>
        <Title>Why bubble?</Title>
        <SubTitle>$BUB - governance & utility token</SubTitle>
        <Text>
          $BUB Earning and governance made simple.
          Delegating power to the community in an open DeFi protocol.
        </Text>
        <ButtonGlow type="button">Join discord</ButtonGlow>
      </LeftCont>
      <HalfCont>
        <Bubble src={tickerImg} alt="Bubble ticker $BUB" />
        <SubText>
          Vote for the future of Bubble and submit your proposals.
          Together, the community has ownership over the treasury and
          on top of that passive income earnings based on generated revenue.
        </SubText>
      </HalfCont>
      <BubbleRight src={bubble} alt="bubble" />
    </Wrapper>
  );
}

export default BubbleWhy;

const Wrapper = styled.div`
  ${flexRow('nowrap', 'center', 'flex-end')};
  position: relative;
  margin-bottom: 12rem;
  padding: 0 5rem;

  &:after {
    content: '';
    position: absolute;
    left: 30px;
    right: 50px;
    top: 0px;
    bottom: -150px;
    z-index: 1;
    transform: skew(-10deg) rotate(-10deg);
    border-radius: 2rem;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(110,110,110,0.01) 0%, rgba(0,0,0,0) 80%);
  }
`;

const HalfCont = styled.div`
  ${flexColumn('nowrap', 'space-between', 'flex-start')};
  flex-basis: 50%;
  z-index: 2; 
  padding: 40px;

  & * {
    margin-bottom: 1.5rem;
  }
`;

const LeftCont = styled(HalfCont)`
  height: 50%;
`;

const Title = styled.h1`
  width: 100%;
  font-weight: 200;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.8px;
`;

const SubTitle = styled.h2`
  font-size: 2.2rem;
  letter-spacing: 1px;
`;

const Text = styled.p`
  text-align: justify;
`;

const SubText = styled.p`
  font-size: 0.9rem;
`;

const Bubble = styled.img`
  height: 500x;  
`;

const BubbleRight = styled.img`
  position: absolute;
  top: -200px;
  right: -600px;
  transform: rotate(150deg);
  z-index: 1;
`;
