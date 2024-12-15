import { Send } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "تماس",
};

const page = () => {
  return (
    <div className="flex-1 flex flex-col-reverse lg:flex-row gap-8 items-center justify-center">
      <div className="lg:flex-1 w-full ">
        <form className="flex flex-col items-center">
          {/* <label htmlFor="">نام:</label> */}
          <input
            type="text"
            placeholder="نام"
            className="border-2 rounded border-gray-500 p-1 m-2 w-3/4"
            required
          />
          {/* <label htmlFor="">ایمیل:</label> */}
          <input
            type="email"
            placeholder="ایمیل"
            className="border-2 rounded border-gray-500 p-1 m-2 w-3/4"
            required
          />
          {/* <label htmlFor="">متن:</label> */}
          <textarea
            name="text"
            id="text"
            placeholder="متن"
            className="border-2 rounded border-gray-500 p-1 m-2 w-3/4 lg:h-72"
            required
          ></textarea>
          <button className="bg-greenApp text-white lg:px-4 lg:py-2 rounded-full px-4 py-1 mt-5 self-center lg:self-start lg:mt-8 lg:mr-[75px] mr-0">
            <Link href={"/contact"} className="flex items-center gap-2">
              <Send size={20} />
              ارسال
            </Link>
          </button>
        </form>
      </div>
      <div className="lg:flex-1 lg:h-full relative w-full h-1/2">
        <Image
          src={"/images/contact.png"}
          alt="cantact"
          fill
          className="object-contain contactImage"
        />
      </div>
    </div>
  );
};

export default page;
