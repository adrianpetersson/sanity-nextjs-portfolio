import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import profilepic from '../assets/images/webpic2.png';
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
          <SubHeader>
            Frontend Developer & UX-Designer at Fitness24Seven
          </SubHeader>
        </TextWrapper>
      </OverlapPositioning>
    </HeroSection>
  );
}

const OverlapPositioning = styled.div`
  width: 100%;
  min-height: 60vh;
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
padding: 80px 0px 40px 0px;
position:relative;
z-index:11;
@media (min-width: 960px) {
  padding: 100px 0px 40px 0px;
  }
}`;
const TextWrapper = styled.div`
position:absolute;
top:50%;
@media (min-width: 477px) {
  position:relative;
  width:60%;
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
  @media (min-width: 960px) {
    width: 350px;
  }
`;

export default HeroBanner;
