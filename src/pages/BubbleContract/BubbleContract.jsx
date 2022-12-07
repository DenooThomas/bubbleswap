import { flexColumn, flexRow } from 'assets/styling/flexer';
import React from 'react';
import styled from 'styled-components';
import ContractImg from 'assets/images/BubbleContract/contract.png';
import Colors from 'assets/styling/colors';

export default function BubbleContract() {
  return (
    <Wrapper>
      <TopCont>
        <BubbleTitle src={ContractImg} alt="Bubble contract" />
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
const Wrapper = styled.div`
  margin-bottom: 6rem;
`;
const TopCont = styled.div`
    ${flexRow('nowrap', 'space-between', 'flex-end')};
    height: 300px;
    width: 100%;
`;

const BubbleTitle = styled.img`
    padding-left: 12rem;
    margin-bottom: -7rem;
    z-index: 2;
`;

const Hyperlink = styled.span`
    padding-bottom: 40px;
    padding-right:  60px;
`;

const ItemCont = styled.div`
    ${flexRow('nowrap', 'center', 'center')};
    width: 100%;
    height: 200px;
`;

const Item = styled.div`
    ${flexColumn('nowrap', 'center', 'center')};
    flex: 1;
    height: 100%;
    border-radius: 1rem;
    border: none;
    background-color: ${Colors.glass};
    margin: 1px;
`;
