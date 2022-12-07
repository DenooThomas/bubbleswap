import styled from 'styled-components';
import BubbleImg from 'assets/images/bubble_small.png';

const BubbleDefault = styled.div`
    background-image: url(${BubbleImg});
    background-size: contain;
    width: 422px;
    height: 440px;
    position: absolute;
    z-index: 1;
`;

export default BubbleDefault;
