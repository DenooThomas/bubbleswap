import { flexRow } from 'assets/styling/flexer';
import React from 'react';
import styled from 'styled-components';

function WhyBubble() {
  return (
    <Wrapper>
      <HalfCont>
        <Title>Why bubble?</Title>
        <SubTitle>$BUB - governance & utility token</SubTitle>
        <Text>
          $BUB Earning and governance made simple.
          Delegating power to the community in an open DeFi protocol.
        </Text>
        <Button>Join discord</Button>
      </HalfCont>
      <HalfCont>
        <h1>$BUB</h1>
        <Text>
          Vote for the future of Bubble and submit your proposals.
          Together, the community has ownership over the treasury and
          on top of that passive income earnings based on generated revenue.
        </Text>
      </HalfCont>
    </Wrapper>
  );
}

export default WhyBubble;

const Wrapper = styled.div`
    ${flexRow('nowrap', 'center', 'center')};
    width: 100vw;
    padding: 60px 60px;
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
    flex-basis: 50%;
    padding: 0 1rem;
    z-index: 2;
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
