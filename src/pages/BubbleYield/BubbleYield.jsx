import { flexColumn, flexRow } from 'assets/styling/flexer';
import React from 'react';
import styled from 'styled-components';
import { ButtonGlowWide } from 'assets/styling/button';
import MoneyImg from 'assets/images/money.png';
import { Title, Intro, Text } from 'assets/styling/text';
import Colors from 'assets/styling/colors';

function BubbleYield() {
  return (
    <Wrapper>
      <TopCont>
        <HalfCont>
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
        </HalfCont>
        <img src={MoneyImg} alt="Bag of Bubble tokens" />
      </TopCont>
      <LeftCont>
        <Title dark bold>Synthetic yield farming</Title>
        <Intro dark bold>
          The BubbleSwap protocol allows users to stake their liquidity provider
          (LP) tokens and earn synthetic yield rewards.
        </Intro>
        <Text dark>
          These rewards are based on a unique liquidity provider tax,
          but are significantly higher when users lock their tokens for a certain period of time.
          With synthetic yield farming, users can leverage their rewards, meaning they can earn more
          while investing a smaller amount of capital.
        </Text>
      </LeftCont>
      <RightCont>
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
      </RightCont>
    </Wrapper>
  );
}

export default BubbleYield;

const Wrapper = styled.div`
  ${flexRow('wrap', 'center', 'center')};
  width: 100%;
`;

const Cont = styled.div`
  height: 475px;
  margin: 1px;
  background-color: white;
  border-radius: 1.1rem;
  border: none;
  padding: 80px;
`;

const TopCont = styled(Cont)`
  ${flexRow('nowrap', 'space-between', 'center')};
  flex: 1 100%;
  background-color: ${Colors.glass};
`;

const HalfCont = styled.div`
  ${flexColumn('nowrap', 'space-between', 'flex-start')};
  width: 50%;
  height: 100%;
`;

const LeftCont = styled(Cont)`
  ${flexColumn('nowrap', 'space-between', 'flex-start')};
  flex: 0.75;
`;

const RightCont = styled(Cont)`
  ${flexColumn('nowrap', 'space-between', 'flex-start')};
  flex: 1;
`;
