import React from 'react';
import styled from 'styled-components';
import bubble from 'assets/images/bubble.png';

function Bubble() {
  return (
    <BubbleStyling />
  );
}

export default Bubble;

const BubbleStyling = styled.div`
  position: absolute;
  background-image: url(${bubble});
  background-repeat: no-repeat;
  max-width: 1000px;
  z-index: 1;
`;
