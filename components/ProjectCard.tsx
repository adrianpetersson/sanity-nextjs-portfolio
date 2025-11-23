'use client';

import React, { useEffect } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithubSquare } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { urlFor } from '../sanity';
import { Button } from '.';

interface ProjectCardProps {
  id?: string;
  mainImage: any;
  title: string;
  year?: string;
  description: string;
  slug?: { current: string };
  link?: string;
  github?: string;
  index: number;
}

function ProjectCard({
  id,
  mainImage,
  title,
  year,
  description,
  slug,
  link,
  github,
  index,
}: ProjectCardProps): React.ReactElement {
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 0.2,
          delay: index * 0.2,
        },
      });
    }
    if (!inView) {
      animation.start({ scale: 0.95, opacity: 0.3, y: 30 });
    }
  }, [inView, animation, index]);

  console.log(mainImage);

  return (
    <motion.article
      ref={ref}
      animate={animation}
      key={id}
      className="transition-all duration-300 ease-in-out rounded-[3px] overflow-hidden relative bg-light-container dark:bg-dark-container shadow-[0px_0px_20px_0px_rgba(0,0,0,0.2)] group"
    >
      <div className="overflow-hidden h-[30vh] lg:h-[200px] lg:bg-[rgb(2,0,36)]">
        <span className="w-auto inline-block mr-3.5 text-black bg-[#f2f2f2] py-1.5 px-2.5 leading-[22px] rounded-[3px] mb-4 absolute z-10 m-5 shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px]">
          {year}
        </span>
        <Image
          width={600}
          height={200}
          src={urlFor(mainImage).auto('format').url() || ''}
          alt={title}
          className="overflow-hidden w-full h-full object-cover transition-all duration-300 ease-in-out lg:w-[600px] lg:h-[200px] group-hover:scale-150 group-hover:-rotate-[10deg]"
        />
      </div>
      <div className="p-4">
        <div />
        <h1 className="text-2xl font-black uppercase">{title}</h1>
        <p className="leading-[30px] lg:leading-[34px]">{description}</p>
        <hr className="mt-2.5 w-full" />
        <div className="gap-2.5 mt-4 flex items-center justify-end lg:justify-end lg:items-center lg:gap-5 lg:flex-row">
          {link && (
            <a
              aria-label="external link to website"
              rel="noreferrer"
              target="_blank"
              href={link}
              className="flex items-center mr-auto lg:mr-0"
            >
              Website
              <FiExternalLink />
            </a>
          )}
          {github && (
            <a
              aria-label="external link to github page"
              rel="noreferrer"
              target="_blank"
              href={github}
              className="flex items-center"
            >
              <FaGithubSquare size={45} className="text-[40px] text-center" />
            </a>
          )}
          {slug?.current && <Button link={slug.current}>Read more..</Button>}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
