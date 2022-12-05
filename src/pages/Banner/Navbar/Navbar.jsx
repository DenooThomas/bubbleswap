import React from 'react';
import styled from 'styled-components';
import { flexRow } from 'assets/styling/flexer';
import logo from 'assets/images/logo.png';

function Navbar() {
  return (
    <Header>
      <Logo src={logo} alt="Logo" />
      <Nav>
        <NavItem>Home</NavItem>
        <NavItem>Bubbleswap</NavItem>
        <NavItem>DAO</NavItem>
        <NavItem>Treasury</NavItem>
        <NavItem>Contract</NavItem>
        <NavItem>Protocol</NavItem>
        <NavItem>Tokenomics</NavItem>
      </Nav>
      <Signup>
        JOIN NOW
      </Signup>
    </Header>
  );
}

export default Navbar;

const headerHeight = '100px';

const Header = styled.div`
  ${flexRow('nowrap', 'space-between', 'center')};
  width: 100%;
  height: ${headerHeight};
  padding: 10px 20px;
  margin-bottom: 1rem;
`;

const Logo = styled.img`
  height: 60px;
`;

const Nav = styled.nav`
  ${flexRow('nowrap', 'space-between', 'center')};
  height: 60px;
`;

const NavItem = styled.li`
  padding: 0 20px;
  line-height: 60px;
  font-size: 0.8rem;
`;

const Signup = styled.button`
  z-index: 2;
  height: 40px;
  padding: 0px 30px;
  background: rgba(241, 241, 241, 0.13);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.6px);
  -webkit-backdrop-filter: blur(0.6px);
  border: 1px solid rgba(241, 241, 241, 0.2);
`;
