import { flexRow } from 'assets/styling/flexer';
import React from 'react';
import styled from 'styled-components';
import BubbleTitleImg from 'assets/images/BubbleSocial/BubbleTitle.png';

function BubbleSocial() {
  return (
    <Wrapper>
      <BubbleTitle src={BubbleTitleImg} alt="Bubble title" />
    </Wrapper>
  );
}

export default BubbleSocial;

const Wrapper = styled.div`
    ${flexRow('nowrap', 'center', 'center')};
    width: 100%;
    height: 600px;
`;

const BubbleTitle = styled.img`
    max-width: 900px;
`;
