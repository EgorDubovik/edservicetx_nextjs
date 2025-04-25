import Header from "../../sections/header";
import Main from "./components/main";
import CallSection from "../../sections/callsection";
import LocationSection from "../../sections/location";
import Footer from "../../sections/footer";
import Brands from "../../sections/components/brands";
import Explanations from "./components/explanations";
import type { Metadata } from "next";
import NewContactForm from "@/sections/newcontactform";
import Benefits from "@/sections/benefits";

export const metadata: Metadata = {
   title: "Washer Repair in Plano, Frisco, McKinney & Allen | Fast & Reliable",
   description:
      "Need reliable Washer repair in Plano, Frisco, McKinney, or Allen? We provide fast and professional service for any type and brand of washer.",
   keywords: [
      "Washer repair",
      "Washer service",
      "Washer maintenance",
      "Washer repair Plano",
      "Washer repair Frisco",
      "Washer repair McKinney",
      "Washer repair Allen",
   ],
   robots: "index, follow",
   alternates: {
      canonical: "https://edservicetx.com/",
   },
   openGraph: {
      title: "Washer Repair in Plano, Frisco, McKinney & Allen | Fast & Reliable",
      description:
         "Expert washer repair services in Plano, Frisco, McKinney, and Allen. We fix any type and brand of washer, reliable, and affordable!",
      url: "https://edservicetx.com/washer",
      siteName: "EDService appliance repair",

      type: "website",
   },
};

export default function Washer() {
   return (
      <div>
         <Header />
         <Main />
         <Brands />
         <Explanations />
         <LocationSection />
         <CallSection />
         <Benefits />
         <NewContactForm />

         <Footer />
      </div>
   );
}
