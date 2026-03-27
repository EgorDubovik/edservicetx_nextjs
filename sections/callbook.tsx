import { APP_CONFIG } from "@/config/config";
import handleClick from "@/app/lib/call-api";

const callbook = () => {
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200">
         {/* Call card */}
         <div className="bg-white flex flex-col items-center justify-center gap-4 px-8 py-12 text-center group hover:bg-blue-50 transition-colors duration-300">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 group-hover:bg-blue-200 transition-colors flex items-center justify-center">
               <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
               </svg>
            </div>
            <div>
               <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                  Call today before noon
               </p>
               <h3 className="text-xl font-bold text-gray-800 mb-3">Same Day Repair</h3>
            </div>
            <a
               href={`tel:${APP_CONFIG.PHONE_NUMBER}`}
               onClick={() => handleClick("btn-call-benefits")}
               className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all text-white font-semibold px-6 py-3 rounded-xl text-lg"
            >
               <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
               </svg>
               {APP_CONFIG.PHONE_NUMBER}
            </a>
         </div>

         {/* Book card */}
         <div className="bg-white flex flex-col items-center justify-center gap-4 px-8 py-12 text-center group hover:bg-orange-50 transition-colors duration-300">
            <div className="w-16 h-16 rounded-2xl bg-orange-100 group-hover:bg-orange-200 transition-colors flex items-center justify-center">
               <svg
                  className="w-8 h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
               </svg>
            </div>
            <div>
               <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                  Available time slots today
               </p>
               <h3 className="text-xl font-bold text-gray-800 mb-3">Book Appointment</h3>
            </div>
            <a
               href={APP_CONFIG.BOOK_APP_URL}
               target="_blank"
               onClick={() => handleClick("btn-book-benefits")}
               className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all text-white font-semibold px-6 py-3 rounded-xl text-lg"
            >
               <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
               </svg>
               Book Online
            </a>
         </div>
      </div>
   );
};

export default callbook;
