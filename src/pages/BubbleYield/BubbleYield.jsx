import { flexColumn, flexRow } from 'assets/styling/flexer';
import React from 'react';
import styled from 'styled-components/macro';
import Wrapper from 'assets/styling/wrapper';
import { ButtonGlowWide } from 'assets/styling/button';
import MoneyImg from 'assets/images/money.png';
import { Title, Intro, Text } from 'assets/styling/text';
import Colors from 'assets/styling/colors';
import device from 'assets/styling/breakpoints';

function BubbleYield() {
  return (
    <StyledWrapper>
      <TopCont>
        <TextCont>
          <Title bold>Liquidity yield farming</Title>
          <Intro>
            Bubble introduces liquid DEX trading.
            Creating a sustainable way for community projects to trade on a decentralized market.
            All trades on BubbleSwap are taxed for liquidity building.
          </Intro>
          <Text>
            This will generate more liquidity and secure that liquidity perpetually by burning LP
            tokens. Providing a more expanding and efficient way
            of trading for all involved parties.
          </Text>
          <ButtonGlowWide>Start earning yield</ButtonGlowWide>
        </TextCont>
        <Money src={MoneyImg} alt="Bag of Bubble tokens" />
      </TopCont>
      <LeftCont>
        <TextCont>
          <Title dark bold>Synthetic yield farming</Title>
          <Intro dark bold>
            The BubbleSwap protocol allows users to stake their liquidity provider
            (LP) tokens and earn synthetic yield rewards.
          </Intro>
          <Text dark>
            These rewards are based on a unique liquidity provider tax,
            but are significantly higher when users lock their tokens for a certain period of time.
            With synthetic yield farming, users can leverage their rewards,
            meaning they can earn more while investing a smaller amount of capital.
          </Text>
        </TextCont>
      </LeftCont>
      <RightCont>
        <TextCont>
          <Title dark bold>
            Delta Neutral Automated Market Making
          </Title>
          <Intro dark bold>
            The BubbleDeFi smart contract was created with the intention to hedge
            for the possibility of a liquidity crunch taxing every transaction with 3% that goes
            straight into liquidity and 2% that builds up the liquidity reserve.
          </Intro>
          <Text dark>
            The BubbleDeFi smart contract was created with the intention to hedge
            for the possibility of a liquidity crunch taxing every transaction with 3% that goes
            straight into liquidity and 2% that builds up the liquidity reserve.
          </Text>
        </TextCont>
      </RightCont>
    </StyledWrapper>
  );
}

export default BubbleYield;

const StyledWrapper = styled(Wrapper)`
  ${flexRow('wrap', 'center', 'center')};

  @media ${device.tablet} {
    padding: 0;
  }
`;

const Cont = styled.div` 
  flex: 1;
  margin: 1px;
  background-color: ${Colors.white};
  border-radius: 1.1rem;
  border: none;
  padding: 5rem 4.5rem;
  height: 40vh;

  @media ${device.tablet} {
    ${flexColumn('nowrap', 'center', 'center')};
    height: auto;
    min-height: 40vh;
    max-height: 95vh;
    padding: 3.5rem 3rem;
    border-radius: 0;
  }

  @media ${device.mobile} {
    max-height: 120vh;
  }
`;

const TopCont = styled(Cont)`
  ${flexRow('nowrap', 'space-around', 'center')};
  flex: 1 100%;
  background-color: ${Colors.glass};
`;

const TextCont = styled.div`
  ${flexColumn('nowrap', 'space-between', 'flex-start')};
  & * {
    margin-bottom: 1rem;

  @media ${device.tablet} {
      margin-bottom: 1.5rem;
    }
  }
  @media ${device.tablet} {
    ${flexColumn('nowrap', 'space-between', 'center')};
  }
`;

const Money = styled.img`
  width: 30vw;

  @media ${device.tablet} {
    width: 50vw;
  }
  @media ${device.mobile} {
    width: 65vw;
  }
`;

const LeftCont = styled(Cont)`
  ${flexColumn('nowrap', 'center', 'flex-start')};
  flex: 0.75;

  @media ${device.tablet} {
    flex: 100%;
  }
`;

const RightCont = styled(Cont)`
  ${flexColumn('nowrap', 'center', 'flex-start')};
  flex: 1;

  @media ${device.tablet} {
    flex: 100%;
  }
`;
