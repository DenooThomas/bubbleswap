import React from 'react';
import styled from 'styled-components';
import bCap from 'assets/images/letters/b_cap.png';
import bSmall from 'assets/images/letters/b_small.png';
import eSmall from 'assets/images/letters/e_small.png';
import lSmall from 'assets/images/letters/l_small.png';
import uSmall from 'assets/images/letters/u_small.png';
import swap from 'assets/images/Swap.png';
import { flexRow } from 'assets/styling/flexer';

function BubbleAnimation() {
  return (
    <Bubble>
      <PositionCont>
        <LetterB src={bCap} alt="Capital letter B" />
        <LetterU src={uSmall} alt="Small letter u" />
        <LetterBSmallFirst src={bSmall} alt="Small letter b" />
        <LetterBSmallSecond src={bSmall} alt="Small letter b" />
        <LetterL src={lSmall} alt="Small letter l" />
        <LetterE src={eSmall} alt="Small letter e" />
        <Swap src={swap} alt="Swap" />
      </PositionCont>
    </Bubble>
  );
}

export default BubbleAnimation;

const Bubble = styled.div`
${flexRow('nowrap', 'center', 'center')};
flex-basis: 100%;
width: 100%;
height: 400px;
`;

const PositionCont = styled.div`
    position: relative;
`;

const Letter = styled.img`
position: absolute;
top: -200px;
right: 0px;
`;

const LetterB = styled(Letter)`

z-index: 8;
`;

const LetterU = styled(Letter)`

z-index: 7;
`;

const LetterBSmallFirst = styled(Letter)`

z-index: 6;
`;

const LetterBSmallSecond = styled(Letter)`

z-index: 5;
`;

const LetterL = styled(Letter)`

z-index: 4;
`;

const LetterE = styled(Letter)`

`;

const Swap = styled(Letter)`
z-index: 10;

`;
