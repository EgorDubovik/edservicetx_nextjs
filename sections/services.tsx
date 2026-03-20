import washer_repair from "../public/washer_repair.png";

import Image from "next/image";
import Brands from "./components/brands";
import {
   ArrowRight,
   Countertops,
   ElectricalServices,
   Handyman,
   Kitchen,
   LocalLaundryService,
   Microwave,
   PendingActions,
} from "@mui/icons-material";
export default function Services() {
   return (
      <section className="py-10  bg-gray-50" id="services">
         <div className="container pb-20">
            <div className="text-center">
               <h1 className="text-3xl font-semibold">
                  We provide services such as
               </h1>
               <div className="w-[200px] border-b border-gray-400 mx-auto my-6"></div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  <div className="shadow-lg rounded-lg   bg-white py-10 px-4">
                     <div className="grid grid-cols-3 gap-2">
                        <div className="flex items-center  justify-center">
                           <ElectricalServices
                              style={{ fontSize: 60 }}
                              className="text-blue-500"
                           />
                        </div>
                        <div className="text-left col-span-2">
                           <h2 className="text-2xl font-semibold text-gray-800">
                              Installation
                           </h2>

                           <p className="text-gray-500 mt-4">
                              We provide installation services for all major
                              brands.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="shadow-lg rounded-lg bg-white py-10 px-4">
                     <div className="grid grid-cols-3 gap-2">
                        <div className="flex items-center justify-center">
                           <Handyman
                              style={{ fontSize: 60 }}
                              className="text-blue-500"
                           />
                        </div>
                        <div className="text-left col-span-2">
                           <h2 className="text-2xl text-gray-800 font-semibold">
                              Repair
                           </h2>

                           <p className="text-gray-500 mt-4">
                              We repair all major brands of appliances.
                           </p>
                        </div>
                     </div>
                  </div>

                  <div className="shadow-lg rounded-lg bg-white py-10 px-4">
                     <div className="grid grid-cols-3 gap-2">
                        <div className="flex items-center justify-center">
                           <PendingActions
                              style={{ fontSize: 60 }}
                              className="text-blue-500"
                           />
                        </div>
                        <div className="text-left col-span-2">
                           <h2 className="text-2xl text-gray-800 font-semibold">
                              Maintenance
                           </h2>

                           <p className="text-gray-500 mt-4">
                              Don't wait until your appliance breaks before
                              getting it fixed.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Brands />
         <div className="pt-6 pb-16">
            <div className="container">
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                  {/* Washer & Dryer */}
                  <a
                     href="/washer"
                     className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden"
                  >
                     <div className="flex items-center justify-center py-8 bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                        <LocalLaundryService
                           style={{ fontSize: 64 }}
                           className="text-blue-500"
                        />
                     </div>
                     <div className="flex flex-col flex-1 p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">
                           Washer &amp; Dryer Repair
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed flex-1">
                           Front load, top load, gas &amp; electric — we fix
                           leaks, spin issues, no heat, and more for all major
                           brands.
                        </p>
                        <span className="mt-5 inline-flex items-center text-blue-500 font-medium text-sm group-hover:gap-2 transition-all duration-200">
                           Learn more <ArrowRight fontSize="small" className="ml-1" />
                        </span>
                     </div>
                  </a>

                  {/* Refrigerator */}
                  <a
                     href="/refrigerator"
                     className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden"
                  >
                     <div className="flex items-center justify-center py-8 bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                        <Kitchen
                           style={{ fontSize: 64 }}
                           className="text-blue-500"
                        />
                     </div>
                     <div className="flex flex-col flex-1 p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">
                           Refrigerator Repair
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed flex-1">
                           French door, side-by-side, bottom freezer. LG
                           Linear Compressor specialists. Ice maker, cooling
                           &amp; water dispenser repair.
                        </p>
                        <span className="mt-5 inline-flex items-center text-blue-500 font-medium text-sm group-hover:gap-2 transition-all duration-200">
                           Learn more <ArrowRight fontSize="small" className="ml-1" />
                        </span>
                     </div>
                  </a>

                  {/* Dishwasher */}
                  <a
                     href="/dishwasher"
                     className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden"
                  >
                     <div className="flex items-center justify-center py-8 bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                        <Countertops
                           style={{ fontSize: 64 }}
                           className="text-blue-500"
                        />
                     </div>
                     <div className="flex flex-col flex-1 p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">
                           Dishwasher Repair
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed flex-1">
                           Dishes not clean, won&apos;t drain, strange noises?
                           We diagnose and repair all major dishwasher brands
                           and models.
                        </p>
                        <span className="mt-5 inline-flex items-center text-blue-500 font-medium text-sm group-hover:gap-2 transition-all duration-200">
                           Learn more <ArrowRight fontSize="small" className="ml-1" />
                        </span>
                     </div>
                  </a>

                  {/* Stove / Oven */}
                  <a
                     href="/stove"
                     className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden"
                  >
                     <div className="flex items-center justify-center py-8 bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                        <Microwave
                           style={{ fontSize: 64 }}
                           className="text-blue-500"
                        />
                     </div>
                     <div className="flex flex-col flex-1 p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">
                           Stove, Oven &amp; Cooktop Repair
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed flex-1">
                           Oven won&apos;t heat, burner won&apos;t ignite,
                           cooktop unresponsive? Gas &amp; electric units of
                           all major brands.
                        </p>
                        <span className="mt-5 inline-flex items-center text-blue-500 font-medium text-sm group-hover:gap-2 transition-all duration-200">
                           Learn more <ArrowRight fontSize="small" className="ml-1" />
                        </span>
                     </div>
                  </a>

               </div>
            </div>
         </div>
      </section>
   );
}
