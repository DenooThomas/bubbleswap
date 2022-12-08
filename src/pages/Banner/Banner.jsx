import React from 'react';
import styled from 'styled-components';
import bubble from 'assets/images/bubble.png';
import { flexColumn, flexRow } from 'assets/styling/flexer';
import { ButtonGlow } from 'assets/styling/button';
import { Title, SubTitle } from 'assets/styling/text';
// import BubbleAnimation from './BubbleAnimation/BubbleAnimation';
import BubbleSwapImg from 'assets/images/BubbleSwap.png';
import Navbar from './Navbar/Navbar';

function Banner() {
  return (
    <>
      <Navbar />
      <Wrapper>
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
        <BubbleRight src={bubble} alt="bubble" />
      </Wrapper>
    </>
  );
}

export default Banner;

const Wrapper = styled.div`
  ${flexColumn('nowrap', 'flex-start', 'center')};
  width: 100%;
  padding: 0 4rem;
  margin-bottom: 6rem;
`;

const StyledTitle = styled(Title)`
  margin-bottom: 1rem;
`;

const SubTitleContent = styled.div`
  ${flexRow('wrap', 'center', 'center')};
  width: 100%;
  margin-bottom: 2rem;
`;

const StyledSubTitle = styled(SubTitle)`
  max-width: 795px;
  font-size: 1rem;
  text-align: center;
  text-justify: inter-word;
  margin-bottom: 1rem;

  @media (min-width: 1024px){
    margin-right: 1.5rem;
  }
`;

const BubbleSwap = styled.img`
  width: 600px;

  @media (min-width: 744px){
    width: auto;
  }
`;

const BubbleLeft = styled.img`
  position: absolute;
  top: 100px;
  left: -550px;
  z-index: 1;
`;

const BubbleRight = styled.img`
  position: absolute;
  top: -580px;
  right: -570px;
  transform: rotate(110deg);
  z-index: 1;
`;
