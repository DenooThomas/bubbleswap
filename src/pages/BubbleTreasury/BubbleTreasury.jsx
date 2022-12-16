import React from 'react';
import styled from 'styled-components';
import Colors from 'assets/styling/colors';
import { flexColumn, flexRow } from 'assets/styling/flexer';
import DiagramImg from 'assets/images/BubbleTreasury/Diagram.png';
import WalletImg from 'assets/images/BubbleTreasury/wallet.png';
import { SubTitle, Title } from 'assets/styling/text';
import { glassBackground } from 'assets/styling/backgrounds';
import BubbleDefault from 'assets/styling/bubble';
import device from 'assets/styling/breakpoints';
import Wrapper from 'assets/styling/wrapper';
import { showElementDelayed } from 'assets/animations/animations';
import { Link } from 'react-router-dom';

function BubbleTreasury() {
  return (
    <StyledWrapper
      variants={showElementDelayed}
      initial="hidden"
      animate="visible"
    >
      <StyledTitle $center $bold $large>Bubble treasury</StyledTitle>
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
        <StyledLink to="/">Follow treasury</StyledLink>
      </Wallet>
      <Diagram src={DiagramImg} alt="Diagram" />
    </StyledWrapper>
  );
}

export default BubbleTreasury;

const StyledWrapper = styled(Wrapper)`
  ${flexRow('wrap', 'space-around', 'flex-start')};

  @media ${device.tablet} {
    ${flexColumn('nowrap', 'space-between', 'center')};
  }
`;

const StyledTitle = styled(Title)`
  margin-bottom: 1.5rem;
  flex: 1 100%;
`;

const StyledSubTitle = styled(SubTitle)`
  text-align: center;
  flex: 1 100%;

  @media ${device.tablet} {
    width: 90vw;
  }
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

const WalletItem = styled.div`
  ${flexRow('nowrap', 'space-between', 'center')};
  position: relative;
  padding: 1.2rem;
  ${glassBackground};
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
  max-width: 560px;
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

const StyledLink = styled(Link)`
  width: 100%;
  text-align: right;
  padding-top: 20px;
  transition: all 0.3s ease-out;
  &:hover, 
  &:focus {
    color: ${Colors.lightblue};
  }
`;
