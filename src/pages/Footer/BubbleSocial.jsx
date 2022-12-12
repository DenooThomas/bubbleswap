import { flexRow } from 'assets/styling/flexer';
import React from 'react';
import styled from 'styled-components';
import BubbleTitleImg from 'assets/images/BubbleSocial/BubbleTitle.png';
import device from 'assets/styling/breakpoints';
import Wrapper from 'assets/styling/wrapper';

function BubbleSocial() {
  return (
    <Wrapper>
      <BubbleCont>
        <BubbleTitle src={BubbleTitleImg} alt="Bubble title" />
      </BubbleCont>
    </Wrapper>
  );
}

export default BubbleSocial;

const BubbleCont = styled.div`
  ${flexRow('nowrap', 'center', 'center')};
  position: relative;
  width: 100%;
  height: 60vh;
  @media ${device.tablet} {
    height: 50vh;
  }
  @media ${device.mobile} {
    height: 40vh;
  }
`;

const BubbleTitle = styled.img`
    height: 100%;
`;
