import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: 'Projetos em Front-End'},
  { number: 800, text: 'Horas estudadas', },

];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Personal Acomplishments
    </SectionTitle>
    <Boxes>
      {data.map((item,index) => {
        return (
          <Box
          key={index}     
         >
           <BoxNum>
             {item.number}+
           </BoxNum>
           <BoxText>
             {item.text }
           </BoxText>
          </Box>
        )
      })}
    </Boxes>
  </Section>
);

export default Acomplishments;
