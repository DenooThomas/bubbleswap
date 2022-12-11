import { ButtonGlow } from 'assets/styling/button';
import { flexColumn } from 'assets/styling/flexer';
import { SubTitle, Title, Text } from 'assets/styling/text';
import React from 'react';
import styled from 'styled-components';
import Wrapper from 'assets/styling/wrapper';
import device from 'assets/styling/breakpoints';

function Panel() {
  return (
    <StyledWrapper>
      <PanelCont>
        <Title bold dark center>Bubble liquid dex trading</Title>
        <SubTitle dark>Connect your crypto wallet to start using dApp</SubTitle>
        <ButtonGlow>Join presale</ButtonGlow>
        <Text dark>No registration needed</Text>
      </PanelCont>
    </StyledWrapper>
  );
}

export default Panel;

const StyledWrapper = styled(Wrapper)`
  @media ${device.tablet} {
    padding: 0;
  }
`;

const PanelCont = styled.div`
    ${flexColumn('nowrap', 'space-between', 'center')};
    width: 100%;
    height: 45vh;
    padding-top: 7rem;
    padding-bottom: 7rem;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.56), rgba(255, 255, 255, 0.56)), conic-gradient(from 26.46deg at 14.17% -28.33%, #FFFFFF 0deg, #A2B0C1 16.7deg, #F9FBFE 24.27deg, #939FAD 47.25deg, #C1D7DB 60.32deg, #C7E2DE 72deg, #D7F7EF 86.4deg, #DEFFF6 97.2deg, #EAFFF9 115.2deg, #F9FFFD 129.6deg, #FFFFFF 156.38deg, #B7C8DC 187.01deg, #E3ECFC 203.99deg, #FCFDFE 219.78deg, #F2F6FD 230.4deg, #EAF0FC 270deg, #FFFFFF 360deg);
    box-shadow: inset 0px 0px 76px #DEE2E7;
    border-radius: 1rem;
    @media ${device.tablet} {
      border-radius: 0;
  }
`;
