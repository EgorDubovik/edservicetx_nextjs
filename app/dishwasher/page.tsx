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
   title: "Dishwasher Repair in Plano, Frisco, McKinney & Allen | Fast & Reliable",
   description:
      "Professional dishwasher repair in Plano, Frisco, McKinney, and Allen. We fix all brands — Bosch, KitchenAid, Samsung, LG, Whirlpool, GE, and more. Same-day service available.",
   keywords: [
      "Dishwasher repair",
      "Dishwasher repair Plano",
      "Dishwasher repair Frisco",
      "Dishwasher repair McKinney",
      "Dishwasher repair Allen",
      "Dishwasher not draining",
      "Dishwasher leaking",
      "Dishwasher not cleaning dishes",
      "Bosch dishwasher repair",
      "Bosch dishwasher repair Plano",
      "KitchenAid dishwasher repair",
      "Samsung dishwasher repair",
      "LG dishwasher repair",
      "Whirlpool dishwasher repair",
      "GE dishwasher repair",
      "Dishwasher not starting",
      "Dishwasher door latch repair",
      "Dishwasher pump repair",
      "Same day dishwasher repair",
      "Dishwasher repair near me",
      "Appliance repair Plano TX",
      "Appliance repair Frisco TX",
   ],
   robots: "index, follow",
   alternates: {
      canonical: "https://edservicetx.com/dishwasher",
   },
   openGraph: {
      title: "Dishwasher Repair in Plano, Frisco, McKinney & Allen | Fast & Reliable",
      description:
         "Professional dishwasher repair in Plano, Frisco, McKinney, and Allen. We fix all brands and models. Call for same-day service!",
      url: "https://edservicetx.com/dishwasher",
      siteName: "EDService appliance repair",
      type: "website",
   },
};

export default function Dishwasher() {
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
