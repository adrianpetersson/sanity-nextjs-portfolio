import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import profilepic from '../assets/images/Heroimage.png';
import { Section } from '../styles/GlobalComponents';

function HeroBanner() {
  return (
    <HeroSection>
      <OverlapPositioning>
        <ImageWrapper>
          <StyledImage
            layout="responsive"
            src={profilepic}
            alt="Picture of Adrian Petersson"
          />
        </ImageWrapper>
        <TextWrapper>
          <Header>Hi, Im Adrian Petersson.</Header>
          <HorizontalDivider />
          <SubHeader>
            Frontend Developer & UX-Designer at Fitness24Seven
          </SubHeader>
        </TextWrapper>
      </OverlapPositioning>
    </HeroSection>
  );
}

const HorizontalDivider = styled.hr`
  border: 4px solid orange;
  border-radius: 2px;
`;

const OverlapPositioning = styled.div`
  width: 100%;
  position: relative;
  @media (min-width: 960px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;
const StyledImage = styled(Image)`
  border-radius: 10px;
`;
const HeroSection = styled(Section)`
padding: 80px 0px 160px 0px;
position:relative;
z-index:11;
@media (min-width: 286px) {
  padding: 100px 0px 120px 0px;
  }
@media (min-width: 960px) {
  padding: 100px 0px 70px 0px;
  }
}`;
const TextWrapper = styled.div`
position:absolute;
top:70%;
@media (min-width: 960px) {
  position:relative;
  }
}`;
const Header = styled.h1`
  font-weight: 900;
  font-size: clamp(38px, 8vw, 80px);
  margin: 0;
`;
const SubHeader = styled.h2`
  font-weight: 900;
  font-size: clamp(21px, 4vw, 34px);
  @media (min-width: 960px) {
  }
`;
const ImageWrapper = styled.div`
  position: unset;
  max-width: 300px;
  @media (min-width: 960px) {
    min-width: 350px;
  }
`;

export default HeroBanner;
