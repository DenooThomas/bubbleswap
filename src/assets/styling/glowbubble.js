import styled from 'styled-components';
import bubble from 'assets/images/bubble.png';

const glowBubble = styled.div`
  position: absolute;
  background-image: url(${bubble});
  background-repeat: no-repeat;
  width: 1000px;
  height: 736px;
  z-index: 1;
`;

export default glowBubble;
