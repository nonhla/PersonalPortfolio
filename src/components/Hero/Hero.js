import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello SovTech,  <br/>
        Welcome to my Personal Portfolio!
      </SectionTitle>
      <SectionText>
        By day, I'm Nonhlanhla Zembe, a final-year student at wethinkcode_ and a YouTube content creator by night.  My expertise includes HTML, CSS, javascript, python, and Java. I learned React and its framework Next.js  
        for this portfolio. <br/>
        <br/>
        I want to work as a front-end software developer. I have a strong sense of teamwork, 
        excellent attention to detail, and the ability to excel in a challenging technical setting. I'm looking 
        for a role that will challenge me within a forward-thinking organization so that I can continue to develop 
        my skills and gain work experience. <br/>
        <br/>
        After conducting extensive research on SovTech and its culture, I am 
        confident that I would be a good fit because my values and those of SovTech are in alignment.
        </SectionText>
        <Button onClick={() => window.location = 'https://www.linkedin.com/in/nonhlanhla-zembe-a8b8a8136/' } >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;