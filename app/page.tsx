import Header from "../sections/header";
import Main from "../sections/main";
import Services from "../sections/services";
import CallSection from "../sections/callsection";
import LocationSection from "../sections/location";
import Footer from "../sections/footer";
import BottomCard from "../sections/bottomCard";
import Contact from "../sections/contact";
import GallerySection from "../sections/gallery";
import Benefits from "../sections/benefits";
import Review from "../sections/review";

import type { Metadata } from "next";
import NewContactForm from "@/sections/newcontactform";

export const metadata: Metadata = {
   title: "Appliance Repair in Plano, Frisco, McKinney & Allen | Fast & Reliable",
   description:
      "Need reliable appliance repair in Plano, Frisco, McKinney, or Allen? We provide fast and professional service for ovens, refrigerators, dishwashers, and more!",
   keywords: [
      "Appliance repair",
      "Appliance service",
      "Appliance maintenance",
      "Appliance repair Plano",
      "Appliance repair Frisco",
      "Appliance repair McKinney",
      "Appliance repair Allen",
   ],
   robots: "index, follow",
   alternates: {
      canonical: "https://edservicetx.com/",
   },
   openGraph: {
      title: "Appliance Repair in Plano, Frisco, McKinney & Allen | Fast & Reliable",
      description:
         "Expert appliance repair services in Plano, Frisco, McKinney, and Allen. We fix refrigerators, ovens, dishwashers, and more. Fast, reliable, and affordable!",
      url: "https://edservicetx.com/",
      siteName: "EDService appliance repair",

      type: "website",
   },
};

export default function Home() {
   return (
      <div>
         <Header />
         <Main />
         <Services />
         <CallSection />
         <LocationSection />
         <Benefits />
         <GallerySection />
         <Review />
         <NewContactForm />
         {/* <Contact /> */}
         {/* <BottomCard /> */}
         <Footer />
      </div>
   );
}
