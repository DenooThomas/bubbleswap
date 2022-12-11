import { flexColumn, flexRow } from 'assets/styling/flexer';
import React from 'react';
import styled from 'styled-components/macro';
import DiagramImg from 'assets/images/BubbleTreasury/Diagram.png';
import WalletImg from 'assets/images/BubbleTreasury/wallet.png';
import { SubTitle, Title, Text } from 'assets/styling/text';
import { GlassBackground, ShadePseudo } from 'assets/styling/backgrounds';
import BubbleDefault from 'assets/styling/bubble';
import device from 'assets/styling/breakpoints';
import Wrapper from 'assets/styling/wrapper';

function BubbleTreasury() {
  return (
    <StyledWrapper>
      <StyledTitle center bold large>Bubble treasury</StyledTitle>
      <StyledSubTitle>All wallets are protected through safe multisig wallets</StyledSubTitle>
      <Wallet>
        <WalletItem>
          <WalletBubble />
          <WalletIcon src={WalletImg} alt="Wallet icon" />
          <WalletAddress>0xb794f5ea0ba39494ce839613fffba742795</WalletAddress>
        </WalletItem>
        <WalletItem>
          <WalletIcon src={WalletImg} alt="Wallet icon" />
          <WalletAddress>0xb794f5ea0ba39494ce839613fffba742795</WalletAddress>
        </WalletItem>
        <WalletItem>
          <WalletIcon src={WalletImg} alt="Wallet icon" />
          <WalletAddress>0xb794f5ea0ba39494ce839613fffba742795</WalletAddress>
        </WalletItem>
        <StyledText>Follow treasury</StyledText>
      </Wallet>
      <Diagram src={DiagramImg} alt="Diagram" />
    </StyledWrapper>
  );
}

export default BubbleTreasury;

const StyledWrapper = styled(Wrapper)`
  ${flexRow('wrap', 'space-around', 'flex-start')};
  ${ShadePseudo}

  @media ${device.tablet} {
    ${flexColumn('nowrap', 'space-between', 'center')};
  }
`;

const StyledTitle = styled(Title)`
  margin-bottom: 1.5rem;
`;

const Wallet = styled.div`
  ${flexColumn('nowrap', 'center', 'flex-end')}
  margin-top: 2rem;
  padding: 0 1rem;

  @media ${device.tablet} {
    ${flexColumn('nowrap', 'center', 'center')}
    width: 80vw;
    margin-bottom: 1rem;
  }
`;

const StyledSubTitle = styled(SubTitle)`
  text-align: center;
  width: 70vw;

  @media ${device.tablet} {
    width: 90vw;
  }
`;

const WalletItem = styled.div`
  ${flexRow('nowrap', 'space-between', 'center')};
  position: relative;
  padding: 1.2rem;
  ${GlassBackground};
  border-radius: 0.5rem;
  margin: 1px;
`;

const WalletIcon = styled.img`
  padding-right: 1.2rem;
`;

const WalletAddress = styled.span`
  @media ${device.tablet} {
    font-size: 0.8rem;
  }
`;
const Diagram = styled.img`
  width: 40vw;

  @media ${device.tablet} {
    width: 60vw;
  }
  @media ${device.mobile} {
    width: 80vw;
  }
`;

const WalletBubble = styled(BubbleDefault)`
  top: -200px;
  left: -275px;
`;

const StyledText = styled(Text)`
  width: 100%;
  text-align: right;
  padding-top: 20px;
`;
