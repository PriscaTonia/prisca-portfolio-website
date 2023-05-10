import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler } from "react-hook-form";

const Contact = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm();

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (formData) => {
    emailjs
      .sendForm(
        "service_f79hnsr",
        "contact_form",
        form.current,
        "oF8fl2Q343tNoE5ek"
      )
      .then(
        (result) => {
          setSuccessMessage(
            `${formData.name}, your message was sent successfully. You'll get a response within 24hrs`
          );
        },
        (error) => {
          setErrorMessage(error.text);
        }
      );
  };
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
      setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 5000);
    }
  }, [formState, reset]);

  return (
    <div id="contact" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] m-auto px-2 py-16 lg:px-0 w-full">
        <p className="text-xl uppercase tracking-widest text-[#a3320b]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300 w-full"
                  src="/assets/others/contact.jpg"
                  width="600"
                  height="400"
                  alt=""
                />
              </div>
              <div>
                <h2 className="py-2">Prisca Onwudebelu</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am availaible for contract and full-time positions
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between max-w-[330px] py-4 ">
                  <a href="https://www.linkedin.com/in/prisca-ebube-6805971a1/">
                    <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>{" "}
                  </a>
                  <a href="https://twitter.com/EbubePrisca">
                    <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaTwitter />
                    </div>
                  </a>
                  <a href="mailto:priscaebueb@gmail.com">
                    <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </a>
                  <a href="https://github.com/PriscaTonia">
                    <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      {" "}
                      <FaGithub />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              {successMessage && (
                <div className="bg-green-400 p-4 rounded-lg">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="bg-red-700 p-4 rounded-lg">{errorMessage}</div>
              )}
              <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      {...register("name")}
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      {...register("phone Number")}
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    {...register("email")}
                    type="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    {...register("subject")}
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    {...register("message")}
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className=" text-[#a3320b]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
