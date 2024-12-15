import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex-1">
      <div className="lg:my-8 my-4">
        <h1 className="font-bold lg:text-5xl text-3xl">کارهای ما</h1>
        <p className="lg:text-2xl lg:mt-6 text-xl mt-4">چه نوع محصولی؟</p>
      </div>
      <div className="lg:flex-row lg:gap-4 flex flex-col gap-4">
        <div className="w-full h-[300px] relative">
          <Image
            src="/images/website.png"
            alt="website"
            fill
            className="object-cover lg:grayscale hover:grayscale-0"
          />
          <h3 className="absolute bottom-0 right-0  bg-greenApp text-white p-2 rounded-tl-sm">
            وب سایت
          </h3>
        </div>
        <div className="w-full h-[300px] relative">
          <Image
            src="/images/illustration.png"
            alt="illustration"
            fill
            className="object-cover lg:grayscale  hover:grayscale-0"
          />
          <h3 className="absolute bottom-0 right-0  bg-greenApp text-white p-2 rounded-tl-sm">
            دیزاین
          </h3>
        </div>
        <div className="w-full h-[300px] relative">
          <Image
            src="/images/apps.jpg"
            alt="app"
            fill
            className="object-cover lg:grayscale  hover:grayscale-0"
          />
          <h3 className="absolute bottom-0 right-0  bg-greenApp text-white p-2 rounded-tl-sm">
            موبایل اپ
          </h3>
        </div>
      </div>
    </div>
  );
};

export default page;
