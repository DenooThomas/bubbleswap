import { flexRow } from 'assets/styling/flexer';
import React from 'react';
import styled from 'styled-components';
import BubbleTitleImg from 'assets/images/BubbleSocial/BubbleTitle.png';
import device from 'assets/styling/breakpoints';
import Wrapper from 'assets/styling/wrapper';
import { showElementDelayed } from 'assets/animations/animations';

function BubbleSocial() {
  return (
    <Wrapper
      variants={showElementDelayed}
      initial="hidden"
      animate="visible"
    >
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
  height: 50vh;
  @media ${device.tablet} {
    height: 40vh;
  }
  @media ${device.mobile} {
    height: 30vh;
  }
`;

const BubbleTitle = styled.img`
    margin-right: -6vw;
    height: 75%;
`;
