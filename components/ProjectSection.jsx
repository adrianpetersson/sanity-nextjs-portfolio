import React from 'react'
import styled from "styled-components"
import {ProjectCard} from "../components";

const ProjectSection = ({project}) => {

    return (
        <GridContainer>
        {project.map((item) => (
            <ProjectCard
              key={item.id}
              title={item.title}
              description={item.description}
              type={item.type}
              mainImage={item.mainImage}
              link={item.link}
              slug={item.slug}
            />
          ))}
          </GridContainer>
    )
}
const GridContainer = styled.section`
display:grid;
width:100%;
grid-template-columns: 1fr;
grid-gap: 1rem;
margin-bottom: 2rem;
@media (min-width: 960px) {
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  }`
export default ProjectSection
