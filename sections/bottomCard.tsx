import LogoWhite from "../public/logo4_white.png";
import Image from "next/image";
import { APP_CONFIG } from "../config/config";
export default function BottomCard() {
   return (
      <div className="bg-[#13213b] border-t-4 border-red-500 py-4">
         <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className=" flex justify-center items-center">
                  <Image src={LogoWhite} alt="logo" height={70} />
               </div>
               <div className="text-white text-2xl text-center mt-6 md:mt-0">
                  <p>Appliance repair or installation</p>
                  <p className="text-gray-400">
                     Call now{" "}
                     <a
                        className="text-orange-400"
                        href={`tel:${APP_CONFIG.PHONE_NUMBER}`}
                     >
                        {APP_CONFIG.PHONE_NUMBER}
                     </a>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}
