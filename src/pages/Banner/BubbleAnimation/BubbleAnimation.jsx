import React from 'react';
import styled from 'styled-components';
import bCap from 'assets/images/letters/b_cap.png';
import bSmall from 'assets/images/letters/b_small.png';
import eSmall from 'assets/images/letters/e_small.png';
import lSmall from 'assets/images/letters/l_small.png';
import uSmall from 'assets/images/letters/u_small.png';
import swap from 'assets/images/Swap.png';

function BubbleAnimation() {
  return (
    <Bubble>
      <LetterB src={bCap} alt="Capital letter B" />
      <LetterU src={uSmall} alt="Capital letter B" />
      <LetterBSmallFirst src={bSmall} alt="Capital letter B" />
      <LetterBSmallSecond src={bSmall} alt="Capital letter B" />
      <LetterL src={lSmall} alt="Capital letter B" />
      <LetterE src={eSmall} alt="Capital letter B" />
      <Swap src={swap} alt="Swap" />
    </Bubble>
  );
}

export default BubbleAnimation;

const Bubble = styled.div`
    width: 100%;
    height: 400px;
    position: relative;
`;

const Letter = styled.img`
    position: absolute;
    top: 0;
    right: 0;
`;

const LetterB = styled(Letter)`
    left: 300px;
    z-index: 8;
`;

const LetterU = styled(Letter)`
    left: 410px;
    top: 25px;
    z-index: 7;
`;

const LetterBSmallFirst = styled(Letter)`
    left: 525px;
    top: -18px;
    z-index: 6;
`;

const LetterBSmallSecond = styled(Letter)`
    left: 650px;
    z-index: 5;
`;

const LetterL = styled(Letter)`
    left: 775px;
    top: -15px;
    z-index: 4;
`;

const LetterE = styled(Letter)`
    left: 830px;
`;

const Swap = styled(Letter)`
    z-index: 10;
    left: 620px;
    top: 100px
`;
