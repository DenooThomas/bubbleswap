import React from 'react';
import styled from 'styled-components';
import { Title } from 'assets/styling/text';
import Wrapper from 'assets/styling/wrapper';
import DiagramImg from 'assets/images/BubbleNomics/diagram.png';
import DiagramBlankImg from 'assets/images/BubbleNomics/DiagramBlank.png';
import { flexColumn } from 'assets/styling/flexer';
import device from 'assets/styling/breakpoints';

function BubbleNomics() {
  return (
    <StyledWrapper>
      <StyledTitle>Tokenomics</StyledTitle>
      <Diagram src={DiagramImg} alt="Diagram roadmap" />
      <DiagramBlank src={DiagramBlankImg} alt="Blank diagram roadmap" />
    </StyledWrapper>
  );
}

export default BubbleNomics;

const StyledWrapper = styled(Wrapper)`
  ${flexColumn('nowrap', 'center', 'center')};
  margin-bottom: 0;
`;

const StyledTitle = styled(Title)`
  position: absolute;
  width: auto;
  left: 10vw;
  top: 10vw;
`;

const Diagram = styled.img`
  max-width: 80vw;

  @media ${device.tablet} {
      max-width: 90vw;
  }
  @media ${device.mobile} {
    display: none;
  }
`;

const DiagramBlank = styled(Diagram)`
  display: none;

  @media ${device.mobile} {
    display: block;
  }
`;
