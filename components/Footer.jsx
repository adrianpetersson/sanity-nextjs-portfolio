import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterSection>
      <FooterText>
        Designed and developed by Adrian Petersson {new Date().getFullYear()}
      </FooterText>
    </FooterSection>
  );
}

const FooterText = styled.p`
  font-size: 16px;
  line-height: 25px;
  max-width: 50%;
`;
const FooterSection = styled.footer`
  position: relative;
  background: {({theme}) => theme.container}
  color: {({theme}) => theme.text}
  text-align: center;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default Footer;
