import { flexRow } from 'assets/styling/flexer';
import React from 'react';
import styled from 'styled-components';
import BubbleTitleImg from 'assets/images/BubbleSocial/BubbleTitle.png';
import device from 'assets/styling/breakpoints';
// import BubbleImg from 'assets/images/bubble_small.png';

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

const Wrapper = styled.div`
    ${flexRow('nowrap', 'center', 'center')};
    width: 100%;
    height: 600px;
`;

const BubbleCont = styled.div`
    position: relative;
`;

const BubbleTitle = styled.img`
    max-width: 80vw;

    @media ${device.tablet} {
      max-width: 90vw;
    }
`;
