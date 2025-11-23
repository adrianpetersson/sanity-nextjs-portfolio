import {
  Contact,
  HeroBanner,
  ProjectSection,
  StackSection,
} from '../components';
import { sanityClient } from '../sanity';

export default async function Home() {
  const query = '*[_type == "project"]';
  const query1 = '*[_type == "about"]';
  const project = await sanityClient.fetch(query);
  const about = await sanityClient.fetch(query1);

  return (
    <>
      <HeroBanner />
      <ProjectSection project={project} />
      {/* <StackSection about={about} /> */}
      <Contact />
    </>
  );
}
