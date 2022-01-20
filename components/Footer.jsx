import React from 'react'
import styled from "styled-components"

const Footer = () => {
    return (
        <FooterSection>
        <p>Designed and developed by Adrian Petersson {new Date().getFullYear()}</p>    
        </FooterSection>
    )
}

const FooterSection = styled.footer`
position:relative;
background: #282829;
color:white;
text-align:center;
height: 300px;
display:flex;
align-items:center;
justify-content:center;
width: 100%;`

export default Footer
