import React from 'react';
import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='Tel: +27737403341'>+27737403341</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:nonhlanhlazembe@gmail.com'>nonhlanhlazembe@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>I'm Living my wildest dreams, by creating all things I've imagined with code...</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/nonhla">
            <AiFillGithub size={"3rem"} />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/nonhlanhla-zembe-a8b8a8136/">
            <AiFillLinkedin size={"3rem"} />
          </SocialIcons><SocialIcons href="https://www.youtube.com/channel/UC5F_FU3MUEbypDYNxBfjPUA">
            <AiFillYoutube size={"3rem"} />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
