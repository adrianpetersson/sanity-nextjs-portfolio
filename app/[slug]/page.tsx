/* eslint-disable @typescript-eslint/no-explicit-any */
import PortableText from "@sanity/block-content-to-react";
import Image from "next/image";

import { sanityClient, urlFor } from "../../sanity";
import { defaultSerializer } from "../../utility/serializer";

interface ProjectData {
  body: any[];
  description: string;
  mainImage: any;
  title: string;
  type: string;
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function projectPage({ params }: ProjectPageProps) {
  const { slug: pageSlug } = await params;
  const query = `*[ _type == "project" && slug.current == $pageSlug] [0]{
title,
mainImage,
type,
description,
body
}`;

  const projectData: null | ProjectData = await sanityClient.fetch(query, {
    pageSlug,
  });

  if (!projectData) {
    return <div>Project not found</div>;
  }

  const { body, description, mainImage, title, type } = projectData;

  return (
    <section className="relative mx-auto flex max-w-[790px] flex-col items-center justify-center pt-20 pb-10">
      <article>
        <div>
          <Image
            alt=""
            className="max-h-full max-w-full"
            height={300}
            src={urlFor(mainImage).auto("format").url() || ""}
            width={500}
          />
          <h1 className="mb-2.5 text-[clamp(30px,8vw,50px)]">{title}</h1>
          <p>{description}</p>
          <div className="my-3 mb-5 w-full">
            <span className="mr-3.5 mb-4 inline-block w-full rounded-[3px] bg-[#f2f2f2] px-2.5 py-1.5 leading-[22px] text-black lg:w-auto">
              {type}
            </span>
            <span className="mr-3.5 mb-4 inline-block w-full rounded-[3px] bg-[#f2f2f2] px-2.5 py-1.5 leading-[22px] text-black lg:w-auto">
              Year
            </span>
            <span className="mr-3.5 mb-4 inline-block w-full rounded-[3px] bg-[#f2f2f2] px-2.5 py-1.5 leading-[22px] text-black lg:w-auto">
              Role
            </span>
          </div>
        </div>
        <PortableText
          blocks={body}
          serializers={defaultSerializer()}
          {...sanityClient.config()}
        />
      </article>
    </section>
  );
}
