import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Button = ({ link, children }) => {
  return (
    <Link href={link}>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  text-align: center;
  height: 40px;
  padding: 0 20px;
  background-color: #003afa;
  box-sizing: border-box;
  border-radius: 5px;
  color: white;
  transition: all 0.4s ease;
  &:hover {
    background: ${({ theme }) => theme.hover};
    transform: translateY(-8%);
    color: white;
  }
  @media (min-width: 960px) {
    margin-left: unset;
  }
`;

export default Button;
