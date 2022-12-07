import React from 'react';
import styled from 'styled-components';
import { Title } from 'assets/styling/text';
import diagramImg from 'assets/images/BubbleNomics/diagram.png';

function BubbleNomics() {
  return (
    <Wrapper>
      <StyledTitle>Tokenomics</StyledTitle>
      <Diagram src={diagramImg} alt="Diagram roadmap" />
    </Wrapper>
  );
}

export default BubbleNomics;

const Wrapper = styled.div`
    width: 100%;
    position: relative;
    padding: 0px 150px;
    background: rgba(20, 27, 34, 0.93);
    backdrop-filter: blur(25px);
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
`;

const StyledTitle = styled(Title)`
    position: absolute;
    top: 100px;
    left: 100px;
`;

const Diagram = styled.img`
    width: 100%;
`;
