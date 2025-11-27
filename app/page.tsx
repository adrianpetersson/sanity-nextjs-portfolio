/* eslint-disable @typescript-eslint/no-explicit-any */
import HeroBanner from "@/components/HeroBanner";
import ProjectSection from "@/components/ProjectSection";

import { sanityClient } from "../sanity";

interface About {
  _id: string;
  [key: string]: any;
}

interface Project {
  _id: string;
  description: string;
  github?: string;
  id?: string;
  link?: string;
  mainImage: any;
  slug: { current: string };
  title: string;
  type: string;
  year?: string;
}

export default async function Home() {
  const query = '*[_type == "project"]';
  const query1 = '*[_type == "about"]';
  const project: Project[] = await sanityClient.fetch(query);
  const about: About[] = await sanityClient.fetch(query1);

  return (
    <>
      <HeroBanner />
      <ProjectSection project={project} />
      {/* <StackSection about={about} /> */}
    </>
  );
}
