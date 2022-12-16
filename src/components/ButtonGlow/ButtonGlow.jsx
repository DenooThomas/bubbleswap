import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Colors from 'assets/styling/colors';
import device from 'assets/styling/breakpoints';

const buttonGlowAnimation = {
  hover: {
    boxShadow: '0px 7px 21px rgba(243, 95, 180, 0.4)',
    background: 'linear-gradient(45deg, rgba(241,83,174,1) 0%, rgba(238,80,45,1) 100%)',
    transition: {
      background: {
        type: 'spring',
        damping: 15,
      },
    },
  },
  tap: {
    scale: 0.95,
    boxShadow: '0px 7px 21px rgba(243, 95, 180, 0.0)',
  },
};

export function ButtonGlow(props) {
  const { children, $wide } = props;
  return (
    <ButtonGlowStyling
      $wide={$wide}
      variants={buttonGlowAnimation}
      whileHover="hover"
      whileTap="tap"
    >
      {children}
    </ButtonGlowStyling>
  );
}

export const ButtonGlowStyling = styled(motion.button)`
    width: ${({ $wide }) => ($wide ? '16rem' : '12rem')};
    height: 3rem;
    border: none;
    color: ${({ dark }) => (dark ? Colors.black : Colors.white)};
    border-radius: 1.1rem;
    padding: 5px 35px;
    background: rgb(241,83,174);
    background: linear-gradient(145deg, rgba(241,83,174,1) 0%, rgba(238,80,45,1) 100%);
    text-transform: uppercase;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    letter-spacing: 1.2px;
    cursor: pointer;

    @media ${device.mobile} {
        width: 70vw;
        box-Shadow: 0px 7px 21px rgba(243, 95, 180, 0.4);
    }
`;
