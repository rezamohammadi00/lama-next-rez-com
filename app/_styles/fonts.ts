//https://jumpshare.com/viewer/font

import localFont from "next/font/local";

// Configure IRANSans font with local paths
const IRANSansFont = localFont({
  src: [
    {
      // font-light
      path: "../../public/fonts/IRANSans/woff2/IRANSansWeb_Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      // font-normal(regular)
      path: "../../public/fonts/IRANSans/woff2/IRANSansWeb.woff2",
      //   path: "../../public/fonts/IRANSans/woff2/IRANSansWeb_Bold.woff2",  --> for test
      weight: "400",
      style: "normal",
    },
    {
      //font-bold
      path: "../../public/fonts/IRANSans/woff2/IRANSansWeb_Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-iransans", // Optional: Define a custom CSS variable for the font
  display: "swap", // Use "swap" to improve font loading performance
});

export { IRANSansFont };
