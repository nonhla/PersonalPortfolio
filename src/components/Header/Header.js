import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link legacyBehavior href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link legacyBehavior href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link legacyBehavior href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/nonhla">
        <AiFillGithub size={"3rem"} />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/nonhlanhla-zembe-a8b8a8136/">
        <AiFillLinkedin size={"3rem"} />
      </SocialIcons><SocialIcons href="https://www.youtube.com/channel/UC5F_FU3MUEbypDYNxBfjPUA">
        <AiFillYoutube size={"3rem"} />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
