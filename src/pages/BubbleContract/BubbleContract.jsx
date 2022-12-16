import { flexColumn, flexRow } from 'assets/styling/flexer';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Title, Text } from 'assets/styling/text';
import Wrapper from 'assets/styling/wrapper';
import ContractImg from 'assets/images/BubbleContract/contract.png';
import Colors from 'assets/styling/colors';
import device from 'assets/styling/breakpoints';
import { showElementDelayed } from 'assets/animations/animations';

export default function BubbleContract() {
  return (
    <Wrapper
      variants={showElementDelayed}
      initial="hidden"
      animate="visible"
    >
      <TopCont>
        <ContractBubble src={ContractImg} alt="Bubble contract" />
        <StyledLink>Check our audit</StyledLink>
      </TopCont>
      <ItemCont>
        <Item>
          <Title $bold $center>5%</Title>
          <Text $center>Liquidity tax on all transactions</Text>
        </Item>
        <Item>
          <Title $bold $center>All</Title>
          <Text $center>LP tokens burned forever</Text>
        </Item>
        <Item>
          <Title $bold $center>100%</Title>
          <Text $center>Liquidity crunch</Text>
        </Item>
        <Item>
          <Title $bold $center>100%</Title>
          <Text $center>SAFU</Text>
        </Item>
      </ItemCont>
    </Wrapper>
  );
}

const TopCont = styled.div`
    ${flexRow('nowrap', 'space-between', 'flex-end')};
    width: 100%;

    @media ${device.tablet} {
      ${flexColumn('nowrap', 'space-between', 'center')};
    }
`;

const ContractBubble = styled.img`
    width: 50vw;
    max-width: 569px;
    margin-bottom: -6rem;
    z-index: 2;

  @media ${device.tablet}{
    width: 90vw;
    margin-bottom: -4rem;
  }
  @media ${device.mobile}{
    margin-bottom: -2rem;
  }
`;

const StyledLink = styled(Link)`
    padding: 2rem;
    transition: all 0.3s ease-out;
    &:hover, 
    &:focus {
      color: ${Colors.lightblue};
    }
`;

const ItemCont = styled.div`
    ${flexRow('nowrap', 'center', 'center')};

    @media ${device.tablet} {
      ${flexRow('wrap', 'center', 'center')};
    }
`;

const Item = styled.div`
    ${flexColumn('nowrap', 'center', 'center')};
    height: 188px;
    border-radius: 1rem;
    border: none;
    background-color: ${Colors.glass};
    margin: 1px;
    position: relative;
    flex: 1;

    @media ${device.tablet} {
      flex: 49%;
    }

    @media ${device.mobile} {
      flex: 100%;
    }
`;
