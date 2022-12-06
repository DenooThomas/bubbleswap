import { flexRow } from 'assets/styling/flexer';
import React from 'react';
import styled from 'styled-components';
import DiagramImg from 'assets/images/Diagram.png';

function BubbleTreasury() {
  return (
    <Wrapper>
      <Title>Bubble treasury</Title>
      <HalfCont>
        <h2>All wallets are protected through safe multisig wallts</h2>
        <div>
          <p>0xb794f5ea0ba39494ce839613fffba74279579268</p>
          <p>0xb794f5ea0ba39494ce839613fffba74279579268</p>
          <p>0xb794f5ea0ba39494ce839613fffba74279579268</p>
        </div>
      </HalfCont>
      <HalfCont>
        <img src={DiagramImg} alt="Diagram" />
      </HalfCont>
    </Wrapper>
  );
}

export default BubbleTreasury;

const Wrapper = styled.div`
    ${flexRow('wrap', 'center', 'flex-start')};
`;

const Title = styled.h1`
    width: 100%;
    height: 75px;
    margin-bottom: 2rem;
    font-size: 3.5rem;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 2px;
`;

const HalfCont = styled.div`
    flex-basis: 50%;
    padding: 20px;
`;
