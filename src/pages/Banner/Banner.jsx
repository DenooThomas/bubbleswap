import React from 'react';
import styled from 'styled-components';
import bubble from 'assets/images/bubble.png';
import { flexColumn, flexRow } from 'assets/styling/flexer';
import { ButtonGlow } from 'assets/styling/button';
import { Title, SubTitle } from 'assets/styling/text';
// import BubbleAnimation from './BubbleAnimation/BubbleAnimation';
import Wrapper from 'assets/styling/wrapper';
import BubbleSwapImg from 'assets/images/BubbleSwap.png';
import device from 'assets/styling/breakpoints';
import Navbar from './Navbar/Navbar';

function Banner() {
  return (
    <>
      <Navbar />
      <StyledWrapper>
        <StyledTitle center bold large>Bubble liquid dex trading</StyledTitle>
        <SubTitleContent>
          <StyledSubTitle>
            Bubble generates deeper liquidity for optimal trading experience.
            Liquidity is secured by perpetually burning LP tokens
            and + and incentivizing higher rewards for LP providers.
          </StyledSubTitle>
          <ButtonGlow type="button">Join presale</ButtonGlow>
          {/* <BubbleAnimation /> */}
        </SubTitleContent>
        <BubbleSwap src={BubbleSwapImg} alt="Bubble swap header" />
        <BubbleLeft src={bubble} alt="bubble" />
        <GlowRight src={bubble} alt="bubble" />
      </StyledWrapper>
    </>
  );
}

export default Banner;

const StyledWrapper = styled(Wrapper)`
  ${flexColumn('nowrap', 'flex-start', 'center')}; 
`;

const StyledTitle = styled(Title)`
  margin-bottom: 1rem;
  z-index: 10;
`;

const SubTitleContent = styled.div`
  ${flexRow('nowrap', 'center', 'center')};
  width: 100%;
  margin-bottom: 2rem;
  position: relative;
  z-index: 10;

  @media ${device.tablet} {
    ${flexRow('wrap', 'center', 'center')};
  }
`;

const StyledSubTitle = styled(SubTitle)`
  max-width: 795px;
  font-size: 1rem;
  text-align: center;
  text-justify: inter-word;
  margin-right: 1.5rem;

  @media ${device.tablet}{
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const BubbleSwap = styled.img`
  width: 65%;
  z-index: 10;

  @media ${device.tablet} {
    width: 85vw;
  }
`;

const BubbleLeft = styled.img`
  position: absolute;
  top: 100px;
  left: -550px;
  z-index: 1;
`;

const GlowRight = styled.img`
  position: absolute;
  top: -580px;
  right: -570px;
  transform: rotate(110deg);
  z-index: 1;
`;
