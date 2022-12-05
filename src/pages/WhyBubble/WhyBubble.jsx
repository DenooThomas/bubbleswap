import { flexRow } from 'assets/styling/flexer';
import React from 'react';
import styled from 'styled-components';

function WhyBubble() {
  return (
    <Wrapper>
      <div>
        <h1>Why bubble?</h1>
        <h2>$BUB - governance & utility token</h2>
        <p>
          $BUB Earning and governance made simple.
          Delegating power to the community in an open DeFi protocol.
        </p>
        <Button>Join discord</Button>
      </div>
      <div>
        <h1>$BUB</h1>
        <p>
          Vote for the future of Bubble and submit your proposals.
          Together, the community has ownership over the treasury and
          on top of that passive income earnings based on generated revenue.
        </p>
      </div>
    </Wrapper>
  );
}

export default WhyBubble;

const Wrapper = styled.div`
    ${flexRow('nowrap', 'center', 'center')};
    width: 100vw;
    height: 50vh;
    padding: 0 60px;
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
