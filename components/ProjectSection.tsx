/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { ProjectCard } from "./ProjectCard";

interface Project {
  _id?: string;
  description: string;
  github?: string;
  id?: string;
  link?: string;
  mainImage: any;
  slug?: { current: string };
  title: string;
  year?: string;
}

interface ProjectSectionProps {
  project: Project[];
}

function ProjectSection({ project }: ProjectSectionProps): React.ReactElement {
  return (
    <section
      className="mb-8 grid w-full grid-cols-1 gap-4 lg:auto-rows-fr lg:grid-cols-2"
      id="projects"
    >
      {project?.map((item, index) => (
        <ProjectCard
          description={item.description}
          github={item.github}
          key={item.id || item._id || index}
          link={item.link}
          mainImage={item.mainImage}
          slug={item.slug}
          title={item.title}
          year={item.year}
        />
      ))}
    </section>
  );
}
export default ProjectSection;
