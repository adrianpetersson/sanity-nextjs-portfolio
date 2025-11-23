'use client';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact(): React.ReactElement {
  const [state, handleSubmit] = useForm('xqkneyvp');

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center mx-auto max-w-[1300px] relative p-0"
    >
      <form
        onSubmit={handleSubmit}
        className="my-5 w-full max-w-[800px] p-4 lg:p-10 bg-light-container dark:bg-dark-container rounded-[10px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.2)]"
      >
        <h2>Contact me</h2>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            className="block w-full bg-[#eee] h-10 rounded-md border border-[#ddd] my-2.5 mb-5 p-5 box-border"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            className="block w-full bg-[#eee] h-10 rounded-md border border-[#ddd] my-2.5 mb-5 p-5 box-border"
          />
        </label>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">
          Message
          <textarea
            id="message"
            name="message"
            className="bg-[#eee] w-full min-h-[100px] resize-none h-10 rounded-md border border-[#ddd] my-2.5 mb-5 p-5 box-border"
          />
        </label>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="block bg-primary text-white text-[0.9rem] border-0 rounded-md h-10 px-5 cursor-pointer"
        >
          Send Message
        </button>
        {state.succeeded && (
          <p className="mt-4">Thank you for getting in touch!</p>
        )}
      </form>
    </section>
  );
}

export default Contact;
