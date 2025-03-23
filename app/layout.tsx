import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { APP_CONFIG } from "../config/config";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <head>
            {/* Structured Data (JSON-LD) for Local SEO */}
            <Script
               id="local-business-jsonld"
               type="application/ld+json"
               strategy="afterInteractive"
               dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                     "@context": "https://schema.org",
                     "@type": "LocalBusiness",
                     name: "EDService Appliance Repair",
                     url: "https://edservicetx.com/",
                     telephone: APP_CONFIG.PHONE_NUMBER,
                     address: {
                        "@type": "PostalAddress",
                        streetAddress: "2901 Ridgeview drive",
                        addressLocality: "Plano",
                        addressRegion: "TX",
                        postalCode: "75025",
                        addressCountry: "US",
                     },
                     areaServed: ["Plano", "Frisco", "McKinney", "Allen"],
                     openingHours: "Mo-Fr 08:00-18:00",
                     priceRange: "$$",
                     image: "https://yourwebsite.com/images/technician.jpg",
                     sameAs: [
                        "https://www.facebook.com/yourbusiness",
                        "https://www.yelp.com/biz/yourbusiness",
                        "https://www.google.com/maps/place/EDService+Appliance+Repair/@33.1104942,-96.7386956,3641m/data=!3m1!1e3!4m6!3m5!1s0x66e09080ce9a74e5:0x2c5eeb20f98fed68!8m2!3d33.11394!4d-96.7471703!16s%2Fg%2F11sjfy8hgx?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D",
                     ],
                  }),
               }}
            />
            <Script
               id="google-tag-manager"
               dangerouslySetInnerHTML={{
                  __html: `
                     (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                     })(window,document,'script','dataLayer','GTM-P9C2J2CK');
                  `,
               }}
            />
         </head>
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
         >
            {/* Add the Google Tag Manager noscript code */}
            <noscript>
               <iframe
                  src="https://www.googletagmanager.com/ns.html?id=GTM-P9C2J2CK"
                  height="0"
                  width="0"
                  style={{ display: "none", visibility: "hidden" }}
               ></iframe>
            </noscript>

            {children}
         </body>
      </html>
   );
}
