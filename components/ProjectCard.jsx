import React from 'react';
import styled from 'styled-components';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithubSquare } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { urlFor } from '../sanity';
import { Button } from '.';
import { Label } from '../styles/GlobalComponents';
import breakpoint from '../utility/breakpoints';

function ProjectCard({
  id,
  mainImage,
  title,
  description,
  type,
  slug,
  link,
  github,
  index,
}) {
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  const animation = useAnimation();

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
  return (
    <Card ref={ref} animate={animation} as={motion.article} key={id}>
      <ImageContainer>
        <StyledLabel>{type}</StyledLabel>
        <StyledImage src={urlFor(mainImage).auto('format').url()} alt={title} />
      </ImageContainer>
      <InfoContainer>
        <div />
        <Title>{title}</Title>
        <CardDescription>{description}</CardDescription>
        <Divider />
        <LinkBar>
          {link && (
            <ExternalLink
              aria-label="external link to website"
              rel="noreferrer"
              target="_blank"
              href={link}
            >
              Website
              <FiExternalLink />
            </ExternalLink>
          )}
          {github && (
            <StyledLink
              aria-label="external link to github page"
              rel="noreferrer"
              target="_blank"
              href={github}
            >
              <GhIcon size={45} />
            </StyledLink>
          )}
          <Button link={slug.current}>Read more..</Button>
        </LinkBar>
      </InfoContainer>
    </Card>
  );
}

const Divider = styled.hr`
  margin-top: 10px;
  width: 100%;
`;
const GhIcon = styled(FaGithubSquare)`
  font-size: 40px;
  text-align: center;
`;
const CardDescription = styled.p`
line-height:30px;
@media only screen and ${breakpoint.device.lg}{
line-height: 34px;
  }
}`;

const ExternalLink = styled.a`
  display: flex;
  align-items: center;
  margin-right: auto;
  @media only screen and ${breakpoint.device.lg} {
    margin-right: unset;
  }
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
`;
const StyledImage = styled.img`
  overflow: hidden;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
  @media only screen and ${breakpoint.device.lg} {
    width: 600px;
    height: 200px;
    object-fit: cover;
  }
`;

const Card = styled.article`
  transition: all 0.3s ease;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  background: ${({ theme }) => theme.container};
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  &:hover {
  }
  &:hover ${StyledImage} {
    transform: scale(1.5) rotate(-10deg);
  }
`;

const StyledLabel = styled(Label)`
  position: absolute;
  width: unset;
  z-index: 10;
  margin: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const LinkBar = styled.div`
  gap: 10px;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and ${breakpoint.device.lg} {
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    flex-direction: row;
  }
`;

const InfoContainer = styled.div`
  padding: 1rem;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  height: 30vh;
  @media only screen and ${breakpoint.device.lg} {
    height: 200px;
    background: rgb(2, 0, 36);
  }
`;
const Title = styled.h1`
font-size:24px;
font-weight:900;
text-transform: uppercase;
}
`;

export default ProjectCard;
