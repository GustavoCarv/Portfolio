import React from 'react';
import Typist from 'react-typist';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding >
    <LeftSection>
      <SectionTitle main center>
       
          Olá e bem-vindos! <br/>
          Sou Gustavo, Dev Front-End.
       
      </SectionTitle>
      <SectionText>
        <Typist 
        cursor={
          {hideWhenDone: true}
        }>
          Programo em Liquido 
          <Typist.Backspace count={7} delay={500} />
          Javascript
          <Typist.Backspace count={10} delay={500} />
          React.JS | Liquido | CSS
          <br/>
          E tenho experiência com implantação VTEX e Shopify.
        </Typist>
      </SectionText>
      <SectionText>
        <a href="https://www.linkedin.com/in/gustavo-carvalho-guimaraes/" target="_blank">          
        <Button children="Saiba mais"></Button>
        </a>
      </SectionText>
    </LeftSection>
    
  </Section>
);

export default Hero;