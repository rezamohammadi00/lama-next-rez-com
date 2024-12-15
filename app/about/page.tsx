import { Send } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "درباره‌ما",
};

const page = () => {
  return (
    <div className="flex-1">
      <div className="w-full h-[300px] relative">
        <Image
          src="/images/about.jpeg"
          alt="Example Image"
          fill
          quality={100}
          className="object-cover grayscale-0 sm:grayscale"
          placeholder="blur"
          blurDataURL="/images/about.jpeg"
        />
      </div>
      <div className="lg:flex lg:justify-between  mb-8 lg:mb-0">
        <div>
          <h3 className="text-3xl mt-6 ">ما کی هستیم؟</h3>
          <p className="text-lg mt-2 lg:w-3/4 leading-relaxed text-gray-700 font-light">
            ما یک تیم خلاق و پرشور از طراحان و توسعه‌دهندگان هستیم که به خلق
            تجربیات دیجیتال منحصربه‌فرد و نوآورانه اعتقاد داریم. با ترکیب هنر و
            فناوری، ما وب‌سایت‌ها و اپلیکیشن‌هایی را طراحی و توسعه می‌دهیم که نه
            تنها زیبا و کاربرپسند هستند، بلکه به کسب‌وکار شما کمک می‌کنند تا به
            اهداف خود دست یابد.
          </p>
        </div>
        <div>
          <h3 className="text-3xl mt-6">کار ما چیه؟</h3>
          <p className="text-lg mt-2 lg:w-3/4 leading-relaxed text-gray-700 font-light">
            ما به این باوریم که طراحی، فراتر از ظاهر بصری است. ما با ایجاد
            تجربیاتی جذاب و تعاملی، کاربران را به محصولات شما جذب کرده و وفاداری
            آنها را افزایش می‌دهیم. با طراحی‌های هوشمندانه و رابط‌های کاربری
            روان، کاربران شما به راحتی با محصولات شما ارتباط برقرار کرده و از
            استفاده از آنها لذت خواهند برد.
          </p>
          <button className="bg-greenApp text-white lg:px-4 lg:py-2 rounded-full px-4 py-1 mt-5 self-center lg:self-start lg:mt-8">
            <Link href={"/contact"} className="flex items-center gap-2">
              <Send size={20} />
              تماس با ما
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
