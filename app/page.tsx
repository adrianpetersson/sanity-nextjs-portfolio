import {
  Contact,
  HeroBanner,
  ProjectSection,
  StackSection,
} from '../components';
import { sanityClient } from '../sanity';

interface Project {
  id?: string;
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  description: string;
  type: string;
  year?: string;
  link?: string;
  github?: string;
}

interface About {
  _id: string;
  [key: string]: any;
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
      <Contact />
    </>
  );
}
