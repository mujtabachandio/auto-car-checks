import type { Metadata } from "next";
import "./globals.css";
// import Navbar from "./components/Navbar";
import Script from "next/script";



export const metadata: Metadata = {
  title: "AutoCarChecks",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=''>
              <Script
                id="tawk-to"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                    (function(){
                      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                      s1.async=true;
                      s1.src='https://embed.tawk.to/67f6a0681340201907628c73/1iodm56hq';
                      s1.charset='UTF-8';
                      s1.setAttribute('crossorigin','*');
                      s0.parentNode.insertBefore(s1,s0);
                    })();
                  `,
                }}
              />
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
