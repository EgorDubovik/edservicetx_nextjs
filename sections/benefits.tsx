"use client";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import CallBook from "./callbook";

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

            <CallBook />
         </div>
      </section>
   );
}
