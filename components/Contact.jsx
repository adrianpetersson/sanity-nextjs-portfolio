/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import { useForm, ValidationError } from '@formspree/react';
import { Section } from '../styles/GlobalComponents';

function Contact() {
  const [state, handleSubmit] = useForm('xqkneyvp');

  return (
    <Section id="contact">
      <StyledForm onSubmit={handleSubmit}>
        <h2>Contact me</h2>
        <label htmlFor="name">Name</label>
        <StyledInput type="text" name="name" />
        <label htmlFor="email">Email</label>
        <StyledInput type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Message</label>
        <StyledTextArea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <StyledButton type="submit" disabled={state.submitting}>
          Send Message
        </StyledButton>
        {state.succeeded && (
          <SubmitMessage>Thank you for getting in touch!</SubmitMessage>
        )}
      </StyledForm>
    </Section>
  );
}

const SubmitMessage = styled.p`
  margin-top: 1rem;
`;
const StyledForm = styled.form`
  margin: 20px 0;
  width: 100%;
  max-width: 800px;
  padding: 1rem;
  background: ${({ theme }) => theme.container};
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  @media (min-width: 960px) {
    padding: 40px;
  }
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;
const StyledButton = styled.button`
  display: block;
  background-color: #003afa;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;
export default Contact;
