import {
  Contact,
  HeroBanner,
  ProjectSection,
  StackSection,
} from '../components';
import { sanityClient } from '../sanity';
import { Layout } from '../layout/Layout';

function Home({ project, about }) {
  return (
    <Layout>
      <HeroBanner />
      <ProjectSection project={project} />
      <StackSection about={about} />
      <Contact />
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "project"]';
  const query1 = '*[_type == "about"]';
  const project = await sanityClient.fetch(query);
  const about = await sanityClient.fetch(query1);
  if (!project.length) {
    return {
      props: {
        project: [],
        about: [],
      },
    };
  }
  return {
    props: {
      project,
      about,
    },
  };
};

export default Home;
