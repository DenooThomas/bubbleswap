import { createGlobalStyle } from 'styled-components';
import device from 'assets/styling/breakpoints';
import Colors from './colors';

const GlobalStyle = createGlobalStyle`
  * {
    z-index: 2;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    color: ${Colors.white};
    overflow-x: hidden;
    background-color: ${Colors.black};
  }
  li {
    list-style: none;
  }
  :root {
    font-size: 22px;

    @media ${device.tablet} {
      font-size: 18px;
    }

    @media ${device.laptop} {
      font-size: 16px;
    }
  }
`;

export default GlobalStyle;
