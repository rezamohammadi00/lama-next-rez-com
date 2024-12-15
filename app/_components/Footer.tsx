import Image from "next/image";

import youtube from "@/public/images/youtube.png";
import instagram from "@/public/images/instagram.png";
import x from "@/public/images/x.png";
import facebook from "@/public/images/facebook.png";

const Footer = () => {
  return (
    <div className="h-[100px] text-sm flex justify-between items-center leading-snug mt-4 lg:mt-0">
      <p className="text-gray-500 w-2/4 lg:w-full">
        ©1403-رض.کلیه حقوق محفوظ است
        {/* <span className="text-red-500">REZ</span> */}
      </p>
      <div className="flex gap-1 lg:gap-[10px] items-center cursor-pointer">
        <Image src={instagram} alt="instagram account" width={24} height={24} />
        <Image src={youtube} alt="youtub account" width={24} height={24} />
        <Image src={x} alt="X account" width={24} height={24} />
        <Image src={facebook} alt="facebook account" width={24} height={24} />
      </div>
    </div>
  );
};

export default Footer;
