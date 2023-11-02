import React from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

import "./ContactForm.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = (e) => {
    emailjs
      .send("service_yiqxor3", "template_yleyzrj", e, "MF02S8wuIcl9_44R6")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };

  return (
    <form onSubmit={handleSubmit(sendEmail)} className="w-full">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            First Name
          </label>
          <input
            className="appearance-none block w-full text-gray border border-orange rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
            {...register("user_name", { required: true })}
          />
          {errors.user_name && (
            <p className="text-darkorange text-xs italic">
              Please fill out this field.
            </p>
          )}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Last Name
          </label>
          <input
            className="appearance-none block w-full text-gray border border-orange rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && (
            <p className="text-darkorange text-xs italic">
              Please fill out this field.
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="grid-email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full text-gray border border-orange rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-email"
            type="email"
            placeholder="janedoe@gmail.com"
            {...register("user_email", { required: true })}
          />
          {errors.user_email && (
            <p className="text-darkorange text-xs italic">
              Please fill out this field.
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="grid-message"
          >
            Message
          </label>
          <textarea
            className="appearance-none block w-full text-gray border border-orange rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-message"
            type="text"
            placeholder="Write something..."
            {...register("message", { required: true })}
          />
          {errors.message && (
            <p className="text-darkorange text-xs italic">
              Please fill out this field.
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-row justify-end">
        <Button
          className="contact-me-button"
          variant="contained"
          sx={{
            alignSelf: "center",
            backgroundColor: "#ff901b",
          }}
          type="submit"
        >
          Contact Me
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
