import React from 'react';
import { DiCss3, DiFirebase, DiHtml5, DiJava, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      During my 2 years at wethinkcode, I've worked with a range of technologies, 
      this would include both Back-end and Front-end development. Have a look at technologies I learned below:
    </SectionText>
    <List>
      <ListItem>
          <DiReact size={"3rem"} />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              React.js
            </ListParagraph>
          </ListContainer>
      </ListItem>
      <ListItem>
          <DiJava size={"3rem"} />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Java
            </ListParagraph>
          </ListContainer>
      </ListItem>
      <ListItem>
          <DiPython size={"3rem"} />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Python
            </ListParagraph>
          </ListContainer>
      </ListItem>
      <ListItem>
          <DiHtml5 size={"3rem"} />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              HTML
            </ListParagraph>
          </ListContainer>
      </ListItem>
      <ListItem>
          <DiCss3 size={"3rem"} />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              CSS
            </ListParagraph>
          </ListContainer>
      </ListItem>
      <ListItem>
          <DiFirebase size={"3rem"} />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Databases
            </ListParagraph>
          </ListContainer>
      </ListItem>
      
    </List>
  </Section>
  );

export default Technologies;
