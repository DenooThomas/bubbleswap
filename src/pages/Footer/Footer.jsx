import React from 'react';
import styled from 'styled-components';
import { flexRow } from 'assets/styling/flexer';
import Colors from 'assets/styling/colors';
import device from 'assets/styling/breakpoints';
import DiscordLogoSrc from 'assets/images/Footer/discord.svg';
import GithubLogoSrc from 'assets/images/Footer/github.svg';
import TwitterLogoSrc from 'assets/images/Footer/twitter.svg';
import BubbleSocial from './BubbleSocial';
import Panel from './Panel';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <Panel />
      <BubbleSocial />
      <StyledFooter>
        <span>
          {currentYear}
          &nbsp;- BubbleSwap
        </span>
        <List>
          <ListItem>Build</ListItem>
          <ListItem>Ecosystem</ListItem>
          <ListItem>Careers</ListItem>
          <ListItem>Documentation</ListItem>
        </List>
        <List>
          <ListItem><SocialLogo src={DiscordLogoSrc} alt="Discord logo" /></ListItem>
          <ListItem><SocialLogo src={TwitterLogoSrc} alt="Discord logo" /></ListItem>
          <ListItem><SocialLogo src={GithubLogoSrc} alt="Discord logo" /></ListItem>
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

    @media ${device.tablet}{
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
`;

const List = styled.ul`
    ${flexRow('nowrap', 'space-between', 'center')};

    @media ${device.tablet} {
      ${flexRow('wrap', 'space-between', 'center')};
    }
`;

const ListItem = styled.li`
    padding: 0px 20px;
`;

const SocialLogo = styled.img`
  width: 20px;
  height: 20px;
`;
