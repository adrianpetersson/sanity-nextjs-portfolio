import React from 'react'
import styled from "styled-components"
import Link from 'next/link'

const Button = ({link,children}) => {
    return (
        <Link href={link}>
        <StyledLink>
         {children}
        </StyledLink>
        </Link>
    )
}

const StyledLink = styled.a`
margin-left:auto;
display:flex;
align-items:center;
justify-content:center;
font-size: 0.9rem;
text-align:center;
height: 40px;
padding: 0 20px;
background: #003afa;
box-sizing: border-box;
border-radius: 5px;
color: white;
cursor: pointer;
transition: all 0.2s ease-in-out;
&:hover{
background:#ae00ff;
}
@media (min-width: 960px){
margin-left:unset;
}
`

export default Button
