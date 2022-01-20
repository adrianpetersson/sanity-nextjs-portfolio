import React from 'react'
import { Section } from '../styles/GlobalComponents'
import { SiTailwindcss, SiReact, SiJavascript, SiStyledcomponents, SiFigma, SiNextdotjs,} from 'react-icons/si';
import { FaSass} from 'react-icons/Fa';
import styled from 'styled-components';
import PortableText from "@sanity/block-content-to-react";
import {IconContext } from "react-icons";
import { sanityClient } from '../sanity';

const icons = [SiTailwindcss,SiReact,SiJavascript, SiStyledcomponents, SiFigma, SiNextdotjs,FaSass]

const StackSection = ({about}) => {
    const body = about[0].body
    return (
        <Section grid gridgap={"50px"} id="about">
            <AboutMeSection>
        <h1>About Me</h1>
        <PortableText
            blocks={body}
            {...sanityClient.config()}
          />
        </AboutMeSection>
        <IconSection>
        <IconContext.Provider value={{ size: "65px",style: { margin: "10px 20px" }}}>
        {icons.map((Icon, idx) => (
<IconWrapper key={idx} >
  <Icon />
  </IconWrapper>
))}
        </IconContext.Provider>
        </IconSection>
        </Section>
    )
}
const IconSection = styled.div`
width:100%;
justify-content:center;
display:flex;
flex-wrap:wrap;
align-items:center;
@media (min-width: 960px){
justify-content:flex-end;
margin: 30px 0px;
}

`
const AboutMeSection = styled.div`
p{
font-size:21px;
line-height:34px;
}`

const IconWrapper = styled.div`
box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
border-radius: 10px;
margin: 5px 0px 10px 10px;
transition: all .2s ease-in-out;
&:hover{
transform: scale(1.1)
}`

export default StackSection
