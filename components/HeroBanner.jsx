import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import profilepic from '../assets/images/webpicSquare.png';
import { Section } from '../styles/GlobalComponents';

const HeroBanner = () => {
  return (
    <HeroSection row space>
      <TextWrapper>
        <Header>Hi, Im Adrian Petersson.</Header>
        <SubHeader>
          Frontend Developer & UX-Designer at Fitness24Seven
        </SubHeader>
      </TextWrapper>
      <ImageWrapper>
        <StyledImage
          layout="responsive"
          src={profilepic}
          alt="Picture of Adrian Petersson"
        />
      </ImageWrapper>
    </HeroSection>
  );
};
const StyledImage = styled(Image)`
  border-radius: 10px;
`;
const HeroSection = styled(Section)`
padding: 120px 0px 40px 0px;
@media (min-width: 960px) {
  padding: 200px 0px 100px 0px;
  }
}`;
const TextWrapper = styled.div`
}`;
const Header = styled.h1`
  font-weight: 900;
  font-size: clamp(40px, 8vw, 80px);
  margin: 0;
`;
const SubHeader = styled.h2`
  font-weight: 900;
  font-size: clamp(20px, 4vw, 34px);
  @media (min-width: 960px) {
  }
`;
const ImageWrapper = styled.div`
  width: 120px;
  position: relative;
  @media (min-width: 960px) {
    width: 250px;
  }
`;

export default HeroBanner;
