import { flexColumn, flexRow } from 'assets/styling/flexer';
import React from 'react';
import styled from 'styled-components';
import { ButtonGlow } from 'assets/styling/button';
import bubble from 'assets/images/bubble.png';
import tickerImg from 'assets/images/ticker.png';
import {
  Title, SubTitle, Text, SubText,
} from 'assets/styling/text';
import { ShadePseudo } from 'assets/styling/backgrounds';
import device from 'assets/styling/breakpoints';

function BubbleWhy() {
  return (
    <Wrapper>
      <StyledHalfCont>
        <StyledTitle>Why bubble?</StyledTitle>
        <SubTitle>$BUB - governance & utility token</SubTitle>
        <StyledText>
          $BUB Earning and governance made simple.
          Delegating power to the community in an open DeFi protocol.
        </StyledText>
        <ButtonGlow type="button">Join discord</ButtonGlow>
      </StyledHalfCont>
      <HalfCont>
        <BubbleTicker src={tickerImg} alt="Bubble ticker $BUB" />
        <StyledSubText>
          Vote for the future of Bubble and submit your proposals.
          Together, the community has ownership over the treasury and
          on top of that passive income earnings based on generated revenue.
        </StyledSubText>
      </HalfCont>
      <BubbleRight src={bubble} alt="bubble" />
    </Wrapper>
  );
}

export default BubbleWhy;

const Wrapper = styled.div`
  ${flexRow('wrap', 'center', 'flex-end')};
  position: relative;
  margin-bottom: 6rem;
  ${ShadePseudo}
`;

const StyledTitle = styled(Title)`
  @media ${device.tablet} {
    text-align: center;
  }
`;

const StyledText = styled(Text)`
  @media ${device.tablet} {
    text-align: center;
    text-justify: inter-word;
  }
`;

const StyledSubText = styled(SubText)`
  @media ${device.tablet} {
    text-align: center;
    text-justify: inter-word;
  }
`;

const HalfCont = styled.div`
  ${flexColumn('nowrap', 'space-between', 'flex-start')};
  flex: 1;
  z-index: 2; 
  padding: 40px;

  & * {
    margin-bottom: 1.5rem;
  }

  @media ${device.tablet} {
    ${flexColumn('nowrap', 'space-between', 'center')};
    padding: 0;
  }
`;

const StyledHalfCont = styled(HalfCont)`
  height: 50%;
`;

const BubbleTicker = styled.img`
  max-width: 500px;
`;

const BubbleRight = styled.img`
  position: absolute;
  top: -200px;
  right: -600px;
  transform: rotate(150deg);
  z-index: 1;
`;
