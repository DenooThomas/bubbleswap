import { flexColumn, flexRow } from 'assets/styling/flexer';
import React from 'react';
import styled from 'styled-components';
import ContractImg from 'assets/images/BubbleContract/contract.png';
import Colors from 'assets/styling/colors';
import device from 'assets/styling/breakpoints';

export default function BubbleContract() {
  return (
    <Wrapper>
      <TopCont>
        <Hyperlink>Check our audit</Hyperlink>
      </TopCont>
      <ItemCont>
        <Item>
          <ContractBubble src={ContractImg} alt="Bubble contract" />
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
const Wrapper = styled.div`
  margin-bottom: 6rem;
`;
const TopCont = styled.div`
    ${flexRow('nowrap', 'flex-end', 'flex-end')};
    height: 300px;
    width: 100%;
`;

const ContractBubble = styled.img`
    position: absolute;
    z-index: 2;
    left: 0px;
    top: -225px;

  @media ${device.tablet} {
    width: 500px;
    left: 0px;
    top: -175px;
  }
`;

const Hyperlink = styled.span`
    padding-bottom: 40px;
    padding-right:  60px;
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
