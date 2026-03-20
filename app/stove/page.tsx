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
   title: "Stove, Oven & Cooktop Repair in Plano, Frisco, McKinney & Allen",
   description:
      "Expert stove, oven, and cooktop repair in Plano, Frisco, McKinney, and Allen. Gas & electric appliances, all major brands. Certified technicians, same-day service available.",
   keywords: [
      "Stove repair",
      "Oven repair",
      "Cooktop repair",
      "Stove repair Plano",
      "Oven repair Plano",
      "Stove repair Frisco",
      "Oven repair Frisco",
      "Stove repair McKinney",
      "Oven repair McKinney",
      "Stove repair Allen TX",
      "Gas stove repair",
      "Electric stove repair",
      "Induction cooktop repair",
      "Gas oven repair",
      "Electric oven repair",
      "Oven not heating",
      "Stove burner not working",
      "Gas burner not igniting",
      "Oven repair near me",
      "Range repair",
      "Wall oven repair",
      "Double oven repair",
      "Samsung oven repair",
      "LG oven repair",
      "GE oven repair",
      "Whirlpool oven repair",
      "Bosch oven repair",
      "KitchenAid oven repair",
      "Same day oven repair",
      "Appliance repair Plano TX",
   ],
   robots: "index, follow",
   alternates: {
      canonical: "https://edservicetx.com/stove",
   },
   openGraph: {
      title: "Stove, Oven & Cooktop Repair in Plano, Frisco, McKinney & Allen",
      description:
         "Expert gas and electric stove, oven, and cooktop repair in Plano, Frisco, McKinney, and Allen. All major brands, certified technicians, same-day service!",
      url: "https://edservicetx.com/stove",
      siteName: "EDService appliance repair",
      type: "website",
   },
};

export default function Stove() {
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
