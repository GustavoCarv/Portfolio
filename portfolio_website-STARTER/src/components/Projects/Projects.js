import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle>
        Projetos
    </SectionTitle>
    <GridContainer>
      {projects.map(({id,image,description,tags,source,visit, title}) => {
        return (
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>
              Stacks
            </TitleContent>
            <TagList>
              {tags.map((tag, i) => {
                return (
                <Tag key={i}>
                  {tag}
                </Tag>)
              })}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={source}>
              Código
            </ExternalLinks>
            <ExternalLinks href={visit}>
              Link
            </ExternalLinks>
          </UtilityList>
        </BlogCard>
        )
      })}
    </GridContainer>
  </Section>

);

export default Projects;