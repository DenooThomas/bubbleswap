import React, { useState } from 'react';
import styled from 'styled-components';
import { flexColumn, flexRow } from 'assets/styling/flexer';
import Colors from 'assets/styling/colors';
import logo from 'assets/images/logo.png';
import device from 'assets/styling/breakpoints';
import HamburgerMenu from './HamburgerMenu';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Header>
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Logo src={logo} alt="Logo" />
      <Nav isOpen={isOpen}>
        <NavItem>Home</NavItem>
        <NavItem>Bubbleswap</NavItem>
        <NavItem>DAO</NavItem>
        <NavItem>Treasury</NavItem>
        <NavItem>Contract</NavItem>
        <NavItem>Protocol</NavItem>
        <NavItem>Tokenomics</NavItem>
        <HamburgerPresaleButton>
          Join presale
        </HamburgerPresaleButton>
      </Nav>
      <PresaleButton>
        Join presale
      </PresaleButton>
    </Header>
  );
}

export default Navbar;

const Header = styled.div`
  ${flexRow('nowrap', 'space-between', 'center')};
  width: 100vw;
  height: 100px;
  padding: 0 4vw;
  position: relative;
  z-index: 10;

  @media ${device.tablet} {
    ${flexRow('nowrap', 'center', 'center')};
  }
`;

const Logo = styled.img`
  height: 60px;
`;

const Nav = styled.nav`
  ${flexRow('nowrap', 'space-between', 'center')};
  position: relative;
  height: 60px;

  @media ${device.tablet} {
    ${flexColumn('nowrap', 'space-between', 'flex-start')};
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? '0px' : '100vw')};
    padding: 10vh 6vw 25vh;
    background-color: ${Colors.black};
    z-index: 900;
  }
`;

const NavItem = styled.li`
  padding: 0 20px;
  line-height: 60px;
  font-size: 0.8rem;

  @media ${device.tablet} {
    padding: 0;
  }
`;

const PresaleButton = styled.button`
  color: ${Colors.white};
  text-transform: uppercase;
  z-index: 2;
  height: 40px;
  padding: 0px 30px;
  background: rgba(241, 241, 241, 0.13);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.6px);
  -webkit-backdrop-filter: blur(0.6px);
  border: 1px solid rgba(241, 241, 241, 0.2);

  @media ${device.tablet} {
    display: none;
  }
`;

const HamburgerPresaleButton = styled(PresaleButton)`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;
