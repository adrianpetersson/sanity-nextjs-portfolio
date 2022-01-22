import React from "react";
import { sanityClient } from "../sanity";
import styled from "styled-components";
import { urlFor } from "../sanity";
import PortableText from "@sanity/block-content-to-react";
import { Section, Label } from "../styles/GlobalComponents";
import { Layout } from "../layout/Layout";
import {defaultSerializer} from "../utility/serializer"
const project = ({ title, mainImage, description, body }) => {

  return (
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
};
export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[ _type == "project" && slug.current == $pageSlug] [0]{
title,
mainImage,
description,
body
}`;

  const project = await sanityClient.fetch(query, { pageSlug });

  if (!project) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        title: project.title,
        mainImage: project.mainImage,
        description: project.description,
        body: project.body,
      },
    };
  }
};

const HeroImage = styled.img`
max-width:100%;
max-height:100%;
`;

const Heading = styled.h1`
font-size: clamp(30px, 8vw, 50px);
margin-bottom:10px;
`

const ArticleHeader = styled.div``;

const InfoBar = styled.div`
margin: 12px 0px 20px 0px;
width:100%;
}`;


export default project;