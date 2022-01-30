/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import PortableText from '@sanity/block-content-to-react';
import { sanityClient, urlFor } from '../sanity';
import { Section, Label } from '../styles/GlobalComponents';
import { Layout } from '../layout/Layout';
import { defaultSerializer } from '../utility/serializer';

const project = ({ title, mainImage, description, body }) => (
  <Layout>
    <Section padding="80px 0px 40px 0px" blogstyle>
      <article>
        <ArticleHeader>
          <HeroImage src={urlFor(mainImage).url()} alt="" />
          <Heading>{title}</Heading>
          <p>{description}</p>
          <InfoBar>
            <Label>type</Label>
            <Label>Year</Label>
            <Label>Role</Label>
          </InfoBar>
        </ArticleHeader>
        <PortableText
          serializers={defaultSerializer()}
          blocks={body}
          {...sanityClient.config()}
        />
      </article>
    </Section>
  </Layout>
);
export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[ _type == "project" && slug.current == $pageSlug] [0]{
title,
mainImage,
description,
body
}`;

  const projectData = await sanityClient.fetch(query, { pageSlug });

  if (!projectData) {
    return {
      props: null,
      notFound: true,
    };
  }
  return {
    props: {
      title: projectData.title,
      mainImage: projectData.mainImage,
      description: projectData.description,
      body: projectData.body,
    },
  };
};

const HeroImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Heading = styled.h1`
  font-size: clamp(30px, 8vw, 50px);
  margin-bottom: 10px;
`;

const ArticleHeader = styled.div``;

const InfoBar = styled.div`
margin: 12px 0px 20px 0px;
width:100%;
}`;

export default project;
