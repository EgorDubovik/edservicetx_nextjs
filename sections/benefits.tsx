"use client";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import { APP_CONFIG } from "../config/config";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import handleClick from "@/app/lib/call-api";
import { BookOnline, BookTwoTone, Event } from "@mui/icons-material";
export default function Benefits() {
   return (
      <section className="py-10 bg-white">
         <div className="container">
            <div className="text-center">
               <h1 className="text-3xl font-semibold text-gray-800">
                  Why choose us?
               </h1>
               <div className="w-[200px] border-b border-gray-400 mx-auto my-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-6">
               <div className="text-center px-4 py-4 mt-4 md:mt-0 rounded-md hover:shadow-lg hover:scale-125 transition-all duration-500">
                  <SpaOutlinedIcon
                     style={{ fontSize: 50 }}
                     className="text-green-700 mb-4"
                  />
                  <h2 className="text-xl font-semibold text-gray-800">
                     High quality
                  </h2>
                  <p className="text-gray-500 mt-2">
                     We use only the best materials and equipment to ensure the
                     highest quality work
                  </p>
               </div>
               <div className="text-center px-4 py-4 mt-4 md:mt-0 rounded-md hover:shadow-lg hover:scale-125 transition-all duration-500">
                  <EngineeringOutlinedIcon
                     style={{ fontSize: 50 }}
                     className="text-blue-700 mb-4"
                  />
                  <h2 className="text-xl font-semibold text-gray-800">
                     Experienced Technicians
                  </h2>
                  <p className="text-gray-500 mt-2">
                     Our team consists of skilled professionals with years of
                     experience in appliance repair.
                  </p>
               </div>
               <div className="text-center px-4 py-4 mt-4 md:mt-0 rounded-md hover:shadow-lg hover:scale-125 transition-all duration-500">
                  <SettingsSuggestOutlinedIcon
                     style={{ fontSize: 50 }}
                     className="text-orange-700 mb-4"
                  />
                  <h2 className="text-xl font-semibold text-gray-800">
                     Fast & Reliable Service
                  </h2>
                  <p className="text-gray-500 mt-2">
                     We value your time and strive to complete repairs quickly
                     without compromising quality.
                  </p>
               </div>
               <div className="text-center px-4 py-4 mt-4 md:mt-0 rounded-md hover:shadow-lg hover:scale-125 transition-all duration-500">
                  <SupportAgentOutlinedIcon
                     style={{ fontSize: 50 }}
                     className="text-purple-700 mb-4"
                  />
                  <h2 className="text-xl font-semibold text-gray-800">
                     Customer Satisfaction
                  </h2>
                  <p className="text-gray-500 mt-2">
                     Your satisfaction is our priority. We provide excellent
                     customer service and stand by our work.
                  </p>
               </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-10 mt-4 md:mt-10">
               <div className="call-conteiner flex flex-col gap-y-6 items-center shadow-lg py-4 w-[400px] rounded border ">
                  <div className="flex items-center">
                     <LocalPhoneIcon
                        className="text-blue-700"
                        style={{ fontSize: 50 }}
                     />
                  </div>
                  <div className="text-center text-xl">Call us today</div>
                  <div className="flex items-center">
                     <a
                        className="btn-call text-xl flex items-center"
                        href={`tel:${APP_CONFIG.PHONE_NUMBER}`}
                        onClick={() => handleClick("btn-call-benefits")}
                     >
                        {APP_CONFIG.PHONE_NUMBER}
                     </a>
                  </div>
                  <p className="text-gray-500 text-sm">
                     Call today before noon - same day repair
                  </p>
               </div>
               <div className="book-conteiner flex flex-col gap-y-6 items-center shadow-lg py-4 w-[400px] rounded border ">
                  <Event style={{ fontSize: 50 }} className="text-orange-700" />
                  <div className="text-center text-xl">Book appointment</div>
                  <div className="flex items-center">
                     <a
                        target="_blank"
                        href={APP_CONFIG.BOOK_APP_URL}
                        onClick={() => handleClick("btn-book-benefits")}
                        className="btn-book text-xl flex items-center"
                     >
                        Book appointment online
                     </a>
                  </div>
                  <p className="text-gray-500 text-sm">
                     Available time for today
                  </p>
               </div>
            </div>

            {/* <div className="py-5 flex flex-col md:flex-row items-center justify-center mt-2 md:mt-10 gap-6">
               <h1 className="text-2xl">Call us today </h1>
               <a
                  className="btn-call text-xl flex items-center"
                  href={`tel:${APP_CONFIG.PHONE_NUMBER}`}
                  onClick={() => handleClick("btn-call-benefits")}
               >
                  <LocalPhoneIcon className="mr-2" />
                  {APP_CONFIG.PHONE_NUMBER}
               </a>
            </div>
            <div className="text-center">
               <p>OR</p>
               <p className="mt-4">
                  <a
                     className="text-orange-700 text-xl border-b border-orange-700 py-2"
                     href={APP_CONFIG.BOOK_APP_URL}
                     onClick={() => handleClick("btn-book-benefits")}
                  >
                     Book appointment online
                  </a>
               </p>
            </div> */}
         </div>
      </section>
   );
}
