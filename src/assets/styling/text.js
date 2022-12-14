import styled from 'styled-components';
import { motion } from 'framer-motion';
import Colors from 'assets/styling/colors';
import device from './breakpoints';

export const Title = styled(motion.h1)`
  color: ${({ $dark }) => ($dark ? Colors.black : Colors.white)};
  width: 100%;
  font-size: ${({ $large }) => ($large ? '3rem' : '2rem')};
  font-weight: ${({ $bold }) => ($bold ? 400 : 200)};
  text-transform: uppercase;
  text-align: ${({ $center }) => ($center ? 'center' : 'left')};
  z-index: 10;

  @media ${device.tablet} {
    text-align: center;
  }
`;

export const SubTitle = styled(motion.h2)`
  color: ${({ $dark }) => ($dark ? Colors.black : Colors.white)};
  font-weight: ${({ $bold }) => ($bold ? 400 : 200)};
  font-size: ${({ $large }) => ($large ? '2.5rem' : '1.1rem')};
  letter-spacing: 1px;
  text-align: ${({ $center }) => ($center ? 'center' : 'left')};
  z-index: 10;

  @media ${device.tablet} {
    text-align: center;
  }
`;

export const Intro = styled(motion.p)`
  color: ${({ $dark }) => ($dark ? Colors.black : Colors.white)};
  font-weight: ${({ $bold }) => ($bold ? 400 : 200)};
  font-size: 1.2rem;
  text-align: ${({ $justify }) => ($justify ? 'justify' : 'left')};
  z-index: 10;
`;

export const Text = styled(motion.p)`
  color: ${({ $dark }) => ($dark ? Colors.black : Colors.white)};
  text-align: ${({ $center }) => ($center ? 'center' : 'justify')};
  z-index: 10;
`;

export const SubText = styled(motion.p)`
  font-size: 0.9rem;
  z-index: 10;
`;
