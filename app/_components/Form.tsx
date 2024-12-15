"use client";

import { Send } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:rezamohammadi7979@gmail.com?subject=تماس%20از%20${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)}%0A%0Aایمیل:%20${encodeURIComponent(
      email
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex-1 flex flex-col-reverse lg:flex-row gap-8 items-center justify-center">
      <div className="lg:flex-1 w-full">
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="نام"
            className="border-2 rounded border-gray-500 p-1 m-2 w-3/4"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ایمیل"
            className="border-2 rounded border-gray-500 p-1 m-2 w-3/4"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            id="text"
            placeholder="متن"
            className="border-2 rounded border-gray-500 p-1 m-2 w-3/4 lg:h-72"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-greenApp text-white lg:px-4 lg:py-2 rounded-full px-4 py-1 mt-5 self-center lg:self-start lg:mt-8 lg:mr-[75px] mr-0"
          >
            <div className="flex items-center gap-2">
              <Send size={20} />
              ارسال
            </div>
          </button>
        </form>
      </div>
      <div className="lg:flex-1 lg:h-full relative w-full h-1/2">
        <Image
          src={"/images/contact.png"}
          alt="contact"
          fill
          className="object-contain contactImage"
        />
      </div>
    </div>
  );
};

export default Form;
