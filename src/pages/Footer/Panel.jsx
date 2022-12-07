import { ButtonGlow } from 'assets/styling/button';
import { flexColumn } from 'assets/styling/flexer';
import { SubTitle, Title, Text } from 'assets/styling/text';
import React from 'react';
import styled from 'styled-components';

function Panel() {
  return (
    <Wrapper>
      <Title bold dark center>Bubble liquid dex trading</Title>
      <SubTitle dark>Connect your crypto wallet to start using dApp</SubTitle>
      <ButtonGlow>Join presale</ButtonGlow>
      <Text dark>No registration needed</Text>
    </Wrapper>
  );
}

export default Panel;

const Wrapper = styled.div`
    ${flexColumn('nowrap', 'space-between', 'center')};
    width: 100%;
    height: 466px;
    padding: 90px 40px;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.56), rgba(255, 255, 255, 0.56)), conic-gradient(from 26.46deg at 14.17% -28.33%, #FFFFFF 0deg, #A2B0C1 16.7deg, #F9FBFE 24.27deg, #939FAD 47.25deg, #C1D7DB 60.32deg, #C7E2DE 72deg, #D7F7EF 86.4deg, #DEFFF6 97.2deg, #EAFFF9 115.2deg, #F9FFFD 129.6deg, #FFFFFF 156.38deg, #B7C8DC 187.01deg, #E3ECFC 203.99deg, #FCFDFE 219.78deg, #F2F6FD 230.4deg, #EAF0FC 270deg, #FFFFFF 360deg);
    box-shadow: inset 0px 0px 76px #DEE2E7;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    margin-bottom: 6rem;
`;
