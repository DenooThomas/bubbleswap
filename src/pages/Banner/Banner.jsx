import React from 'react';
import styled from 'styled-components';
import bubble from 'assets/images/bubble.png';
import { flexColumn, flexRow } from 'assets/styling/flexer';
import { ButtonGlow } from 'assets/styling/button';
import { Title } from 'assets/styling/text';
import BubbleAnimation from './BubbleAnimation/BubbleAnimation';
import Navbar from './Navbar/Navbar';

function Banner() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <StyledTitle center bold large>Bubble liquid dex trading</StyledTitle>
        <SubTitleContent>
          <SubTitle>
            Bubble generates deeper liquidity for optimal trading experience.
            Liquidity is secured by perpetually burning LP tokens
            and + and incentivizing higher rewards for LP providers.
          </SubTitle>
          <ButtonGlow type="button">Join presale</ButtonGlow>
        </SubTitleContent>
        <BubbleAnimation />
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
  margin-bottom: 6rem;
`;

const StyledTitle = styled(Title)`
  margin-bottom: 2rem;
`;

const SubTitleContent = styled.div`
  ${flexRow('nowrap', 'center', 'center')};
  width: 100%;
  height: 75px;
  margin-bottom: 2rem;

  @media (min-width: 744px){
    ${flexRow('wrap', 'center', 'center')};
  }
`;

const SubTitle = styled.h2`
  max-width: 700px;
  text-align: justify;
  display: inline-block;
  vertical-align: center;
  font-size: 1rem;
  font-weight: 200;
  text-align: center;
  margin-right: 1.5rem;

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
