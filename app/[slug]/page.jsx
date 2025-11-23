import PortableText from '@sanity/block-content-to-react';
import { sanityClient, urlFor } from '../../sanity';
import { defaultSerializer } from '../../utility/serializer';

export default async function projectPage({ params }) {
  const pageSlug = params.slug;
  const query = `*[ _type == "project" && slug.current == $pageSlug] [0]{
title,
mainImage,
type,
description,
body
}`;

  const projectData = await sanityClient.fetch(query, { pageSlug });

  if (!projectData) {
    return <div>Project not found</div>;
  }

  const { title, mainImage, type, description, body } = projectData;

  return (
    <section className="flex flex-col items-center justify-center mx-auto max-w-[790px] relative pt-20 pb-10">
      <article>
        <div>
          <img
            src={urlFor(mainImage).auto('format').url()}
            alt=""
            className="max-w-full max-h-full"
          />
          <h1 className="text-[clamp(30px,8vw,50px)] mb-2.5">{title}</h1>
          <p>{description}</p>
          <div className="my-3 mb-5 w-full">
            <span className="w-full inline-block mr-3.5 text-black bg-[#f2f2f2] py-1.5 px-2.5 leading-[22px] rounded-[3px] mb-4 lg:w-auto">
              {type}
            </span>
            <span className="w-full inline-block mr-3.5 text-black bg-[#f2f2f2] py-1.5 px-2.5 leading-[22px] rounded-[3px] mb-4 lg:w-auto">
              Year
            </span>
            <span className="w-full inline-block mr-3.5 text-black bg-[#f2f2f2] py-1.5 px-2.5 leading-[22px] rounded-[3px] mb-4 lg:w-auto">
              Role
            </span>
          </div>
        </div>
        <PortableText
          serializers={defaultSerializer()}
          blocks={body}
          {...sanityClient.config()}
        />
      </article>
    </section>
  );
}
