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
        <Typist>
          Programo em Liquido 
          <Typist.Backspace count={7} delay={500} />
          Javascript
          <Typist.Backspace count={10} delay={500} />
          React.JS || Liquido || CSS
          <br/>
          E tenho experiência com VTEX e Shopify
        </Typist>
      </SectionText>
      <SectionText>
        <Button children="Saiba mais"></Button>
      </SectionText>
    </LeftSection>
    
  </Section>
);

export default Hero;