import device from 'assets/styling/breakpoints';
import Colors from 'assets/styling/colors';
import { flexColumn } from 'assets/styling/flexer';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import hamburgerVariants from './animations/hamburgerVariants';

function HamburgerMenu(props) {
  const { isOpen, toggleOpen } = props;

  return (
    <Hamburger
      onClick={() => toggleOpen()}
      variants={hamburgerVariants}
      whileTap="rotate"
    >
      <StripeTop $isOpen={isOpen} />
      <StripeMiddle $isOpen={isOpen} />
      <StripeBottom $isOpen={isOpen} />
    </Hamburger>
  );
}

export default HamburgerMenu;

const hamburgerWidth = '30px';
const hamburgerHeight = '25px';

const Hamburger = styled(motion.div)`
  ${flexColumn('nowrap', 'space-between', 'center')};
  width: ${hamburgerWidth};
  height: ${hamburgerHeight};
  position: absolute;
  display: none;
  left: 2rem;
  top: 2rem;
  z-index: 999;

  @media ${device.tablet} {
    display: flex;
  }
`;
const Stripe = styled(motion.span)`
  width: ${hamburgerWidth};
  height: 3px;
  background-color: ${Colors.white};
  transition: 0.3s ease-in-out;
  transform-origin: left;
`;

const StripeTop = styled(Stripe)`
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'rotate(0)')};
`;

const StripeMiddle = styled(Stripe)`
  display: ${({ $isOpen }) => ($isOpen ? 'none' : 'inline')};
`;

const StripeBottom = styled(Stripe)`
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
`;
