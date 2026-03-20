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
import PhoneStrip from "@/sections/phonestrip";

export const metadata: Metadata = {
   title: "Refrigerator Repair in Plano, Frisco, McKinney & Allen | LG & All Brands",
   description:
      "Expert refrigerator repair in Plano, Frisco, McKinney, and Allen. We specialize in LG refrigerator repair including Linear Compressor and French Door models. Same-day service available.",
   keywords: [
      "Refrigerator repair",
      "Refrigerator repair Plano",
      "Refrigerator repair Frisco",
      "Refrigerator repair McKinney",
      "Refrigerator repair Allen",
      "Fridge repair near me",
      "LG refrigerator repair",
      "LG refrigerator repair Plano",
      "LG refrigerator repair Frisco",
      "LG refrigerator repair McKinney",
      "LG fridge repair",
      "LG French door refrigerator repair",
      "LG linear compressor repair",
      "LG compressor replacement",
      "LG refrigerator not cooling",
      "LG ice maker repair",
      "LG water dispenser repair",
      "LG refrigerator error codes",
      "French door refrigerator repair",
      "Samsung refrigerator repair",
      "Whirlpool refrigerator repair",
      "Refrigerator not cooling",
      "Ice maker repair",
      "Refrigerator ice maker not working",
      "Refrigerator water dispenser not working",
      "Refrigerator compressor repair",
      "Same day refrigerator repair",
      "Refrigerator repair service Dallas area",
      "Appliance repair Plano TX",
      "Appliance repair Frisco TX",
   ],
   robots: "index, follow",
   alternates: {
      canonical: "https://edservicetx.com/refrigerator",
   },
   openGraph: {
      title: "Refrigerator Repair in Plano, Frisco, McKinney & Allen | LG Specialist",
      description:
         "Expert refrigerator repair in Plano, Frisco, McKinney, and Allen. We specialize in LG refrigerator repair — Linear Compressor, French Door, ice maker, and more. Call for same-day service!",
      url: "https://edservicetx.com/refrigerator",
      siteName: "EDService appliance repair",
      type: "website",
   },
};

export default function Refrigerator() {
   return (
      <div>
         <Header />
         <Main />

         <Brands />
         <Explanations />
         <PhoneStrip />
         <LocationSection />
         <CallSection />
         <Benefits />
         <NewContactForm />
         <Footer />
      </div>
   );
}
