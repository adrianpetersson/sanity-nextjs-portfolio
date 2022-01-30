/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import {
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiStyledcomponents,
  SiFigma,
  SiNextdotjs,
} from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import styled from 'styled-components';
import PortableText from '@sanity/block-content-to-react';
import { IconContext } from 'react-icons';
import { Section } from '../styles/GlobalComponents';
import { sanityClient } from '../sanity';

const icons = [
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiStyledcomponents,
  SiFigma,
  SiNextdotjs,
  FaSass,
];

function StackSection({ about }) {
  const { body } = about[0];
  return (
    <Section padding="40px 0px" grid gridgap="50px" id="about">
      <AboutMeSection>
        <h1>About Me</h1>
        <PortableText blocks={body} {...sanityClient.config()} />
      </AboutMeSection>
      <IconSection>
        <IconContext.Provider
          value={{
            style: { margin: '10px 20px', fontSize: 'clamp(36px, 8vw, 80px)' },
          }}
        >
          {icons.map((Icon, idx) => (
            <IconWrapper key={idx}>
              <Icon />
            </IconWrapper>
          ))}
        </IconContext.Provider>
      </IconSection>
    </Section>
  );
}
const IconSection = styled.div`
  width: 100%;
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media (min-width: 960px) {
    justify-content: flex-end;
    margin: 30px 0px;
  }
`;
const AboutMeSection = styled.div`
  p {
    font-size: 21px;
    line-height: 34px;
  }
`;

const IconWrapper = styled.div`
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 5px 0px 10px 10px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export default StackSection;
