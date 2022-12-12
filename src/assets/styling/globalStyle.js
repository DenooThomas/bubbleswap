import { createGlobalStyle } from 'styled-components';
import device from 'assets/styling/breakpoints';
import Colors from './colors';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    z-index: 2;

  }
  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    color: ${Colors.white};
    overflow-x: hidden;
    background-color: ${Colors.black};
  }
  li {
    list-style: none;
  }
  :root {
    font-size: 20px;

    @media ${device.tablet} {
      font-size: 18px;
    }

    @media ${device.laptop} {
      font-size: 16px;
    }
  }
`;

export default GlobalStyle;
