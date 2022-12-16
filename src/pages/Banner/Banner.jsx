import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import bubble from 'assets/images/bubble.png';
import { flexColumn, flexRow } from 'assets/styling/flexer';
import { ButtonGlow } from 'components/ButtonGlow/ButtonGlow';
import { Title, SubTitle } from 'assets/styling/text';
// import BubbleAnimation from './BubbleAnimation/BubbleAnimation';
import Wrapper from 'assets/styling/wrapper';
import BubbleSwapSrc from 'assets/images/Banner/BubbleSwap.png';
import device from 'assets/styling/breakpoints';
import { showElement, showElementDelayed } from 'assets/animations/animations';

function Banner() {
  return (
    <StyledWrapper
      variants={showElementDelayed}
      initial="hidden"
      animate="visible"
    >
      <StyledTitle
        $center
        $bold
        $large
        variants={showElement}
      >
        Bubble liquid dex trading
      </StyledTitle>
      <SubTitleContent
        variants={showElement}
      >
        <StyledSubTitle
          variants={showElement}
        >
          Bubble generates deeper liquidity for optimal trading experience.
          Liquidity is secured by perpetually burning LP tokens
          and + and incentivizing higher rewards for LP providers.
        </StyledSubTitle>
        <ButtonGlow>Join presale</ButtonGlow>
        {/* <BubbleAnimation /> */}
      </SubTitleContent>
      <BubbleSwapImg
        src={BubbleSwapSrc}
        alt="Bubble swap header"
        variants={showElement}
      />
      <GlowLeft
        src={bubble}
        alt="bubble"
      />
      <GlowRight
        src={bubble}
        alt="bubble"
      />
    </StyledWrapper>
  );
}

export default Banner;

const StyledWrapper = styled(Wrapper)`
  ${flexColumn('nowrap', 'flex-start', 'center')};
  margin-bottom: 12vh;
`;

const StyledTitle = styled(Title)`
  margin-bottom: 1rem;
  z-index: 10;
`;

const SubTitleContent = styled(motion.div)`
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

const BubbleSwapImg = styled(motion.img)`
  max-width: 744px;
  width: 65%;
  z-index: 10;

  @media ${device.tablet} {
    width: 85vw;
  }
`;

const GlowLeft = styled.img`
  position: absolute;
  top: 0rem;
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
