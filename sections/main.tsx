"use client";
import { APP_CONFIG } from "@/config/config";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Image from "next/image";
import master from "../public/master2.png";
import handleClick from "@/app/lib/call-api";

export default function Main() {
   return (
      <section className="py-10 md:py-20 bg-gradient-to-b from-[#fff] to-[#b5dfff]">
         <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="text-center md:text-left">
                  <h1
                     className="text-5xl md:text-6xl font-semibold text-gray-800"
                     style={{ lineHeight: 1.2 }}
                  >
                     Home Appliance Repair Service
                  </h1>
                  <p className="text-lg md:text-2xl py-10">
                     We are a full-service appliance repair company specializing
                     in kitchen and bathroom appliances.
                  </p>
                  <p className="text-lg md:text-2xl">
                     <b>Call</b> before 12 Noon, Monday - Friday <br />
                     and we will be there <b>today</b>
                  </p>
                  <div className="py-10 flex items-center justify-center md:justify-start">
                     <a
                        href={`tel:${APP_CONFIG.PHONE_NUMBER}`}
                        className="btn-call text-[25px] md:text-2xl flex items-center justify-center"
                        onClick={() => handleClick("btn-call-main")}
                     >
                        <LocalPhoneIcon className="mr-2" />
                        {APP_CONFIG.PHONE_NUMBER}
                     </a>
                  </div>
               </div>
               <div className="">
                  <Image src={master} alt="master" height={500} />
               </div>
            </div>
         </div>
      </section>
   );
}
