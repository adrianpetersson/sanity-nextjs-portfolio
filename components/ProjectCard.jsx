import React from 'react';
import styled from 'styled-components';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithubSquare } from 'react-icons/fa';
import { urlFor } from '../sanity';
import { Button } from '.';
import { Label } from '../styles/GlobalComponents';

const ProjectCard = ({
  id,
  mainImage,
  title,
  description,
  type,
  slug,
  link,
  github,
}) => {
  return (
    <>
      {title && (
        <Card key={id}>
          <ImageContainer>
            <StyledLabel>{type}</StyledLabel>
            <StyledImage src={urlFor(mainImage).url()} alt={title} />
          </ImageContainer>
          <InfoContainer>
            <div></div>
            <Title>{title}</Title>
            <CardDescription>{description}</CardDescription>
            <Divider />
            <LinkBar>
              {link && (
                <ExternalLink rel="noreferrer" target="_blank" href={link}>
                  Website
                  <FiExternalLink />
                </ExternalLink>
              )}
              {github && (
                <StyledLink rel="noreferrer" target="_blank" href={github}>
                  <GhIcon size={45} />
                </StyledLink>
              )}
              <Button link={slug.current}>Read more..</Button>
            </LinkBar>
          </InfoContainer>
        </Card>
      )}
    </>
  );
};

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
@media (min-width: 960px){
line-height: 34px;
  }
}`;

const ExternalLink = styled.a`
  display: flex;
  align-items: center;
  margin-right: auto;
  @media (min-width: 960px) {
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
  @media (min-width: 960px) {
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
  @media (min-width: 960px) {
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
  @media (min-width: 960px) {
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
