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
         <Contact />
         <BottomCard />
         <Footer />
      </div>
   );
}
