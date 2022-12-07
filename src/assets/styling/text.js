import styled from 'styled-components';
import Colors from 'assets/styling/colors';

export const Title = styled.h1`
  color: ${({ dark }) => (dark ? Colors.black : Colors.white)};
  width: 100%;
  font-size: ${({ large }) => (large ? '3.5rem' : '2rem')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 200)};
  text-transform: uppercase;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  letter-spacing: 0.8px;
`;

export const SubTitle = styled.h2`
  color: ${({ dark }) => (dark ? Colors.black : Colors.white)};
  font-size: 1.2rem;
  letter-spacing: 1px;
`;

export const Intro = styled.p`
    color: ${({ dark }) => (dark ? Colors.black : Colors.white)};
    font-weight: ${({ bold }) => (bold ? 'bold' : 200)};
    font-size: 1.2rem;
    text-align: justify;
`;

export const Text = styled.p`
  color: ${({ dark }) => (dark ? Colors.black : Colors.white)};
  text-align: justify;
`;

export const SubText = styled.p`
  font-size: 0.9rem;
`;
