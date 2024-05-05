

import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });
//wowow
// export const metadata = {
//   title: " Lesotho Job Market",
//   description: "An app to help youth find employment in the country",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
     <Head>
      <title>hey there</title>
      <meta/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        ></Script>

        <Script id="google analytics" dangerouslySetInnerHTML={{
          __html: `
       
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{
            page_path: window.location.pathname,
          });
    
        `
        }}/>
      

      

      </Head>
 
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId='G-N94WV9YLTF' />
    </html>
  );
}
