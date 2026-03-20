"use client";
import { APP_CONFIG } from "@/config/config";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import handleClick from "@/app/lib/call-api";

export default function PhoneStrip() {
   return (
      <section className="bg-blue-50 border-y border-blue-100 py-8">
         <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
               <div className="text-center md:text-left">
                  <p className="text-sm font-medium uppercase tracking-widest text-blue-400 mb-1">
                     Same-day service available
                  </p>
                  <p className="text-2xl md:text-3xl font-semibold text-gray-800">
                     Call before noon — we&apos;ll be there today
                  </p>
               </div>
               <a
                  href={`tel:${APP_CONFIG.PHONE_NUMBER}`}
                  onClick={() => handleClick("btn-call-phonestrip")}
                  className="flex items-center gap-3 bg-blue-600 text-white font-bold text-xl md:text-2xl px-8 py-4 rounded-2xl shadow hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap"
               >
                  <span className="relative flex">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-40"></span>
                     <LocalPhoneIcon style={{ fontSize: 32 }} className="relative" />
                  </span>
                  {APP_CONFIG.PHONE_NUMBER}
               </a>
            </div>
         </div>
      </section>
   );
}
