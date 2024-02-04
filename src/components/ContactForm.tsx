import React from "react";
import GreenButton from "./GreenButton";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-5">
      <FormFieldContainer>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          className="bg-[#555555] rounded-md p-2 w-full text-white"
        />
      </FormFieldContainer>

      <FormFieldContainer>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          autoComplete="off"
          id="email"
          className="bg-[#555555] rounded-md p-2 w-full text-white"
        />
      </FormFieldContainer>

      <FormFieldContainer>
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          autoComplete="off"
          id="subject"
          className="bg-[#555555] rounded-md p-2 w-full text-white"
        />
      </FormFieldContainer>

      <FormFieldContainer>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          autoComplete="off"
          className="bg-[#555555] rounded-md p-2 w-full text-white"
          cols={30}
          rows={10}
        ></textarea>
      </FormFieldContainer>

      <input
        type="submit"
        className="bg-green-wala cursor-pointer uppercase md:w-fit p-2 px-3 text-black-wala rounded-md  "
      />
    </form>
  );
};

export default ContactForm;

function FormFieldContainer({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-1">{children}</div>;
}
