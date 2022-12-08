import { createGlobalStyle } from 'styled-components';
import Colors from './colors';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    color: ${Colors.white};
    list-style-type: none;
    z-index: 2;
  }
`;

export const BodyOverflow = createGlobalStyle`
 body {
  overflow-x: hidden;
  background-color: ${Colors.black};
 }
`;
