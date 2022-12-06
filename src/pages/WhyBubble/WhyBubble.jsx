import { flexColumn, flexRow } from 'assets/styling/flexer';
import React from 'react';
import styled from 'styled-components';
import ButtonGlow from 'assets/styling/button';
import bubble from 'assets/images/bubble.png';

function WhyBubble() {
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
        <Bubble />
        <Text>
          Vote for the future of Bubble and submit your proposals.
          Together, the community has ownership over the treasury and
          on top of that passive income earnings based on generated revenue.
        </Text>
      </HalfCont>
      <BubbleRight src={bubble} alt="bubble" />
    </Wrapper>
  );
}

export default WhyBubble;

const Wrapper = styled.div`
    ${flexRow('nowrap', 'center', 'center')};
    position: relative;

    &:after {
        content: '';
        position: absolute;
        left: 30px;
        right: 50px;
        top: -100px;
        bottom: -150px;
        z-index: 1;
        transform: skew(-10deg) rotate(-10deg);
        border-radius: 2rem;
        background: rgb(255,255,255);
        background: linear-gradient(180deg, rgba(110,110,110,0.01) 0%, rgba(0,0,0,0) 80%);
    }
`;

const HalfCont = styled.div`
    ${flexColumn('nowrap', 'space-around', 'flex-start')};
    flex-basis: 50%;
    padding: 0 5rem;
    z-index: 2; 
`;

const LeftCont = styled(HalfCont)`
  height: 50%;
`;

const Text = styled.p`
    margin-bottom: 1rem;
`;

const Title = styled.h1`
    font-weight: 200;
    text-align: center;
    margin-bottom: 1rem;
`;

const SubTitle = styled.h2`
    margin-bottom: 1rem;
    font-size: 2.2rem;
    letter-spacing: 1px;
`;

const Bubble = styled.div`
  width: 100%;
  height: 350px;  
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 1rem;
`;

const BubbleRight = styled.img`
  position: absolute;
  top: -200px;
  right: -650px;
  transform: rotate(150deg);
  z-index: 1;
`;
