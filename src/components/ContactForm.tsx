"use client";
import React, { useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { sendEmail } from "@/actions/sendEmail";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//success notification toast!
const notifySuccess = () =>
  toast.success("Message sent successfully! ✅", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    transition: Bounce,
  });

//error notification toast!
const notifyError = () =>
  toast.error("Message not sent! Try again 😔", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    transition: Bounce,
  });

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.target); // Get form data

    try {
      setLoading(true);
      const result = await sendEmail(formData); // Send email
      if (result) {
        notifySuccess();
      } else {
        notifyError();
      }

      console.log("RESULT", result);
    } catch (error) {
      console.log("ERROR:", error);
      // notifyError();
    } finally {
      setLoading(false);

      //finally reset the form
      formRef.current?.reset();
    }
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit} ref={formRef}>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

      <FormFieldContainer>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="senderName"
          autoComplete="off"
          className="dark:bg-[#555555] bg-gray-200 rounded-md p-2 w-full text-black-wala dark:text-white"
        />
      </FormFieldContainer>

      <FormFieldContainer>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          autoComplete="off"
          name="senderEmail"
          id="email"
          className="dark:bg-[#555555] bg-gray-200 rounded-md p-2 w-full text-black-wala dark:text-white"
        />
      </FormFieldContainer>

      <FormFieldContainer>
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          name="subject"
          autoComplete="off"
          id="subject"
          className="dark:bg-[#555555] bg-gray-200 rounded-md p-2 w-full text-black-wala dark:text-white"
        />
      </FormFieldContainer>

      <FormFieldContainer>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          autoComplete="off"
          className="dark:bg-[#555555] bg-gray-200 rounded-md p-2 w-full text-black-wala dark:text-white"
          cols={30}
          rows={10}
        ></textarea>
      </FormFieldContainer>

      {loading ? (
        <span className="bg-green-wala group cursor-pointer font-medium w-fit p-2 px-3 text-black-wala rounded-md flex items-center gap-1 ">
          Sending...
        </span>
      ) : (
        <button
          type="submit"
          className="bg-green-wala group cursor-pointer font-medium w-fit p-2 px-3 text-black-wala rounded-md flex items-center gap-1 "
        >
          <span>Send</span>
          <IoIosSend
            size={23}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-[360deg] transition duration-300"
          />
        </button>
      )}
    </form>
  );
};

export default ContactForm;

function FormFieldContainer({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-1">{children}</div>;
}
