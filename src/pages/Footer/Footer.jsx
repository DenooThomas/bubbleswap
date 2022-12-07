import React from 'react';
import styled from 'styled-components';
import { flexRow } from 'assets/styling/flexer';
import Colors from 'assets/styling/colors';
import Panel from './Panel';
import BubbleSocial from './BubbleSocial';

function Footer() {
  return (
    <div>
      <Panel />
      <BubbleSocial />
      <StyledFooter>
        <span>2023 -- BubbleSwap</span>
        <List>
          <ListItem>Build</ListItem>
          <ListItem>Ecosystem</ListItem>
          <ListItem>Careers</ListItem>
          <ListItem>Documentation</ListItem>
        </List>
        <List>
          <ListItem>D</ListItem>
          <ListItem>Tw</ListItem>
          <ListItem>W</ListItem>
          <ListItem>Git</ListItem>
        </List>

      </StyledFooter>
    </div>
  );
}

export default Footer;

const StyledFooter = styled.footer`
    ${flexRow('nowrap', 'space-between', 'center')};
    padding: 25px;
    background-color: ${Colors.glass};
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
`;

const List = styled.ul`
    ${flexRow('nowrap', 'space-between', 'center')};
`;

const ListItem = styled.li`
    padding: 0px 20px;
`;
