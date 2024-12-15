import Image from "next/image";
import { Send } from "lucide-react";

import hero from "@/public/images/hero.png";
import Link from "next/link";

// export const metadata: Metadata = {
//   title: "REZ | Home",
//   description: "شرکت صنعت فناوری REZ",
// };

const HomePage = () => {
  return (
    <main className="flex flex-col-reverse lg:flex-row items-center  flex-1 justify-center">
      {/* Text Section */}
      <div className="lg:flex-1 flex flex-col  items-center text-center lg:text-right lg:gap-0">
        <h1 className="text-4xl lg:text-7xl font-bold leading-snug lg:leading-tight mt-1 lg:mt-0 heroTitle">
          دیزاین شیک برای محصول شما
        </h1>
        <p className="text-lg lg:text-2xl font-light lg:mt-4 mt-1">
          تبدیل ایده شما به واقعیت. ما تیمی از صنعت فناوری جهان را گرد هم
          آورده‌ایم.
        </p>
        <button className="bg-greenApp text-white lg:px-4 lg:py-2 rounded-full px-4 py-1 mt-5 self-center lg:self-start lg:mt-8 font-normal">
          <Link href={"/contact"} className="flex items-center gap-2">
            <Send size={20} />
            تماس با ما
          </Link>
        </button>
      </div>

      {/* Image Section */}
      <div className="lg:flex-1 h-1/2 lg:h-full relative w-full">
        <Image
          src={hero}
          alt="hero"
          fill
          className="object-contain heroImage"
          quality={100}
          placeholder="blur"
        />
      </div>
    </main>
  );
};

export default HomePage;
