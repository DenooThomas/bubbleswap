import { flexColumn, flexRow } from 'assets/styling/flexer';
import React from 'react';
import styled from 'styled-components';
import DiagramImg from 'assets/images/BubbleTreasury/Diagram.png';
import WalletImg from 'assets/images/BubbleTreasury/wallet.png';
import { SubTitle, Title, Text } from 'assets/styling/text';
import { GlassBackground, ShadePseudo } from 'assets/styling/backgrounds';
import BubbleDefault from 'assets/styling/bubble';

function BubbleTreasury() {
  return (
    <Wrapper>
      <StyledTitle center bold large>Bubble treasury</StyledTitle>
      <Wallet>
        <StyledSubTitle>All wallets are protected through safe multisig wallts</StyledSubTitle>
        <WalletItem>
          <WalletIcon src={WalletImg} alt="Wallet icon" />
          <p>0xb794f5ea0ba39494ce839613fffba74279579268</p>
        </WalletItem>
        <WalletItem>
          <WalletIcon src={WalletImg} alt="Wallet icon" />
          <span>0xb794f5ea0ba39494ce839613fffba74279579268</span>
        </WalletItem>
        <WalletItem>
          <WalletIcon src={WalletImg} alt="Wallet icon" />
          <span>0xb794f5ea0ba39494ce839613fffba74279579268</span>
        </WalletItem>
        <StyledText>Follow treasury</StyledText>
        <WalletBubble />
      </Wallet>
      <Diagram src={DiagramImg} alt="Diagram" />
    </Wrapper>
  );
}

export default BubbleTreasury;

const Wrapper = styled.div`
  ${flexRow('wrap', 'space-around', 'flex-start')};
  position: relative;
  margin-bottom: 6rem;
  ${ShadePseudo}
`;

const Wallet = styled.div`
  ${flexColumn('nowrap', 'center', 'flex-end')}
  margin-top: 60px;
  padding: 0 20px;
`;

const WalletItem = styled.div`
  ${flexRow('nowrap', 'space-between', 'center')};
  padding: 20px;
  padding-right: 20px;
  ${GlassBackground};
  border-radius: 0.5rem;
  margin: 1px;
`;

const WalletIcon = styled.img`
  padding-right: 20px;
`;

const Diagram = styled.img`
  max-width: 560px;
`;

const WalletBubble = styled(BubbleDefault)`
  top: 0;
  left: -100px;
`;

const StyledTitle = styled(Title)`
  margin-bottom: 20px;
`;

const StyledSubTitle = styled(SubTitle)`
  text-align: center;
  margin-bottom: 20px;
  width: 70%;
`;

const StyledText = styled(Text)`
  width: 100%;
  text-align: right;
  padding-top: 20px;
`;
