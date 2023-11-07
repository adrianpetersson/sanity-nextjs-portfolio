import React from 'react';
import styled from 'styled-components';
import { ProjectCard } from '.';
import breakpoint from '../utility/breakpoints';

function ProjectSection({ project }) {
  return (
    <GridContainer id="projects">
      {project?.map((item, index) => (
        <ProjectCard
          index={index}
          key={item.id}
          title={item.title}
          description={item.description}
          year={item.year}
          mainImage={item.mainImage}
          link={item.link}
          github={item.github}
          slug={item.slug}
        />
      ))}
    </GridContainer>
  );
}
const GridContainer = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  margin-bottom: 2rem;
  @media only screen and ${breakpoint.device.lg} {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
  }
`;
export default ProjectSection;
