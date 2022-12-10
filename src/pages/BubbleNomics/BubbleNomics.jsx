import React from 'react';
import styled from 'styled-components';
import { Title } from 'assets/styling/text';
import DiagramImg from 'assets/images/BubbleNomics/diagram.png';
import { flexRow } from 'assets/styling/flexer';
import device from 'assets/styling/breakpoints';

function BubbleNomics() {
  return (
    <Wrapper>
      <StyledTitle>Tokenomics</StyledTitle>
      <Diagram src={DiagramImg} alt="Diagram roadmap" />
    </Wrapper>
  );
}

export default BubbleNomics;

const Wrapper = styled.div`
  ${flexRow('nowrap', 'center', 'center')};
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
    top: 6rem;
    left: 6rem;
    @media ${device.tablet} {
      top: 3rem;
      left: 3rem;
    }
`;

const Diagram = styled.img`
  max-width: 80vw;

  @media ${device.tablet} {
      max-width: 90vw;
    }
`;
