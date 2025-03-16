import { APP_CONFIG } from "@/config/config";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Image from "next/image";
import WasherImage from "../../../public/washer_repair.png";
export default function Main() {
   return (
      <section className="py-10 md:py-20 bg-gradient-to-b from-[#fff] to-[#b5dfff]">
         <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="text-center md:text-left">
                  <h1
                     className="text-5xl md:text-6xl font-semibold "
                     style={{ lineHeight: 1.2 }}
                  >
                     Washer Repair Service
                  </h1>
                  <p className="text-lg md:text-2xl py-10">
                     We can fix any type and brand of washer, <br />
                     reliable, and affordable.
                  </p>
                  <p className="text-lg md:text-2xl">
                     <b>Call</b> before 12 Noon, Monday - Friday <br />
                     and we will be there <b>today</b>
                  </p>
                  <div className="py-10 flex items-center justify-center md:justify-start">
                     <a
                        href={APP_CONFIG.BOOK_APP_URL}
                        className="btn-call text-lg md:text-2xl flex items-center justify-center"
                     >
                        <LocalPhoneIcon className="mr-2" />
                        {APP_CONFIG.PHONE_NUMBER}
                     </a>
                  </div>
               </div>
               <div className="relative">
                  <Image
                     src={WasherImage}
                     alt="washer"
                     height={600}
                     className="absolute top-[-50px]"
                  />
               </div>
            </div>
         </div>
      </section>
   );
}
