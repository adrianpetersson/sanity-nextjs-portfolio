import React from 'react';
import { ProjectCard } from '.';

function ProjectSection({ project }) {
  return (
    <section
      id="projects"
      className="grid w-full grid-cols-1 gap-4 mb-8 lg:grid-cols-2 lg:auto-rows-fr"
    >
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
    </section>
  );
}
export default ProjectSection;
