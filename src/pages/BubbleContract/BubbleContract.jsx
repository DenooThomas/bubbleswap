import { flexColumn, flexRow } from 'assets/styling/flexer';
import React from 'react';
import styled from 'styled-components';
import Wrapper from 'assets/styling/wrapper';
import ContractImg from 'assets/images/BubbleContract/contract.png';
import Colors from 'assets/styling/colors';
import device from 'assets/styling/breakpoints';

export default function BubbleContract() {
  return (
    <Wrapper>
      <TopCont>
        <ContractBubble src={ContractImg} alt="Bubble contract" />
        <Hyperlink>Check our audit</Hyperlink>
      </TopCont>
      <ItemCont>
        <Item>
          <h1>5%</h1>
          <p>Liquidity tax on all transactions</p>
        </Item>
        <Item>
          <h1>All</h1>
          <p>LP tokens burned forever</p>
        </Item>
        <Item>
          <h1>100%</h1>
          <p>Liquidity crunch</p>
        </Item>
        <Item>
          <h1>100%</h1>
          <p>SAFU</p>
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
    max-width: 632px;
    margin-bottom: -2rem;
    z-index: 2;

  @media ${device.tablet}{
    width: 90vw;
    margin-bottom: 0rem;
  }
`;

const Hyperlink = styled.span`
    padding-bottom: 3rem;
    padding-right:  2rem;
    @media ${device.tablet} {
      padding-right:  0;
      padding-top: 3rem;
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
