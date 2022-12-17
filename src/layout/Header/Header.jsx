import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { flexColumn, flexRow } from 'assets/styling/flexer';
import Colors from 'assets/styling/colors';
import logo from 'assets/images/Banner/logo.png';
import device from 'assets/styling/breakpoints';
import glassHover from 'assets/animations/glassHover';
import HamburgerMenu from './HamburgerMenu';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
    if (isOpen) {
      document.body.removeAttribute('style');
    } else {
      document.body.style.overflow = 'hidden';
    }
  }

  function closeHamburger() {
    setIsOpen(false);
    document.body.removeAttribute('style');
  }

  useEffect(() => {
    console.log('isOpen => ', isOpen);
  }, []);

  const navigation = ['bubbleSwap', 'dao', 'treasury', 'contract', 'protocol', 'tokenomics'];

  return (
    <HeaderCont>
      <HamburgerMenu isOpen={isOpen} toggleOpen={() => toggleOpen()} />
      <Link to="/"><Logo src={logo} alt="Logo" /></Link>
      <Nav isOpen={isOpen}>
        <NavItem to="/" onClick={() => closeHamburger()}>Home</NavItem>
        {navigation.map((item) => (
          <NavItem
            key={item}
            to={`/${item}`}
            onClick={() => closeHamburger()}
            $uppercase={item === 'dao'}
          >
            {item}
          </NavItem>
        ))}
        <HamburgerPresaleButton
          variants={glassHover}
          whileHover="hover"
          whileTap="tap"
        >
          Join presale
        </HamburgerPresaleButton>
      </Nav>
      <PresaleButton
        variants={glassHover}
        whileHover="hover"
        whileTap="tap"
      >
        Join presale
      </PresaleButton>
    </HeaderCont>
  );
}

export default Header;

const HeaderCont = styled.div`
  ${flexRow('nowrap', 'space-between', 'center')};
  width: 100%;
  height: 6rem;
  padding: 0 4vw;
  position: relative;
  z-index: 10;

  @media ${device.tablet} {
    ${flexRow('nowrap', 'center', 'center')};
  }
`;

const Logo = styled.img`
  max-width: 142px;
  height: 60px;
`;

const Nav = styled.nav`
  ${flexRow('nowrap', 'space-between', 'center')};
  position: relative;
  height: 60px;

  @media ${device.tablet} {
    ${flexColumn('nowrap', 'space-between', 'center')};
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? '0px' : '100vw')};
    padding: 10vh 6vw;
    background-color: ${Colors.black};
    z-index: 900;
  }
`;

const NavItem = styled(Link)`
  padding: 0.5rem;
  margin: 0 1rem;
  font-size: 0.8rem;
  color: ${Colors.white};
  text-transform: ${({ $uppercase }) => ($uppercase ? 'uppercase' : 'capitalize')};
  transition: color 0.3s ease-out;
  &:hover, 
  &:focus {
    color: ${Colors.lightblue};
  }

  @media ${device.tablet} {
    padding-left: 0;
    font-size: 2rem;
  }
`;

const PresaleButton = styled(motion.button)`
  color: ${Colors.white};
  text-transform: uppercase;
  z-index: 2;
  height: 2.8rem;
  padding: 0px 30px;
  background: ${Colors.glass};
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.6px);
  -webkit-backdrop-filter: blur(0.6px);
  border: 1px solid rgba(241, 241, 241, 0.2);
  cursor: pointer;

  @media ${device.tablet} {
    display: none;
  }
`;

const HamburgerPresaleButton = styled(PresaleButton)`
  height: 4rem;
  margin-top: 1rem;
  font-size: 1.5rem;
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;
