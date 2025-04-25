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
         <div className="services pt-0 md:pt-10">
            <div className="container">
               {/* FOR MOBILE */}
               <div className="flex flex-col md:hidden px-4 gap-10">
                  <div className="flex items-center justify-between w-full">
                     <div className="w-[220px]">
                        <h1 className="text-2xl">Washer Dryer Repair</h1>
                        <p className="text-blue-500 mt-4 text-right">
                           Read more <ArrowRight />
                        </p>
                     </div>
                     <LocalLaundryService
                        style={{ fontSize: 60 }}
                        className="text-blue-500"
                     />
                  </div>
                  <div className="flex items-center justify-between w-full ">
                     <div className="w-[220px]">
                        <h1 className="text-2xl">Refrigerator Repair</h1>
                        <p className="text-blue-500 mt-4 text-right">
                           Read more <ArrowRight />
                        </p>
                     </div>
                     <Kitchen
                        style={{ fontSize: 60 }}
                        className="text-blue-500"
                     />
                  </div>
                  <div className="flex items-center justify-between w-full ">
                     <div className="w-[220px]">
                        <h1 className="text-2xl">Dishwasher Repair</h1>
                        <p className="text-blue-500 mt-4 text-right">
                           Read more <ArrowRight />
                        </p>
                     </div>
                     <Countertops
                        style={{ fontSize: 60 }}
                        className="text-blue-500"
                     />
                  </div>
                  <div className="flex items-center justify-between w-full ">
                     <div className="w-[220px]">
                        <h1 className="text-2xl">
                           Stove, Oven & Cooktop Repair
                        </h1>
                        <p className="text-blue-500 mt-4 text-right">
                           Read more <ArrowRight />
                        </p>
                     </div>
                     <Microwave
                        style={{ fontSize: 60 }}
                        className="text-blue-500"
                     />
                  </div>
               </div>

               {/* FOR DESKTOP */}
               <div className=" grid-cols-2 gap-y-4 hidden md:grid">
                  <div className="flex flex-row justify-end ">
                     <div className="px-10 text-right min-w-[350px]">
                        <h2 className="text-2xl">Washer Dryer Repair</h2>
                        <p className="text-gray-500 mt-4 max-w-[500px]">
                           We will diagnose the issue and provide you with a
                           written estimate for the repair. We can fix any type
                           and brand of washer and dryer, including front load,
                           top load, gas, electric, and high efficiency models.
                           From leaky hoses to faulty thermostats, our expert
                           technicians have the knowledge and parts to get your
                           laundry room back up and running.
                        </p>
                        <p className="mt-2 text-blue-500 text-right">
                           <a href="/washer">
                              Read more <ArrowRight />
                           </a>
                        </p>
                     </div>
                  </div>
                  <div className="pl-20 items-center justify-start flex">
                     <LocalLaundryService
                        style={{ fontSize: 100 }}
                        className="text-blue-500"
                     />
                  </div>
                  <div className="flex items-center justify-end pr-20">
                     <Kitchen
                        style={{ fontSize: 100 }}
                        className="text-blue-500"
                     />
                  </div>
                  <div className="flex justify-start pt-10">
                     <div className="px-10 text-left min-w-[350px]">
                        <h2 className="text-2xl">Refrigerator Repair</h2>
                        <p className="text-gray-500 mt-4 max-w-[500px]">
                           We will diagnose the issue and provide you with a
                           written estimate for the repair. We can fix any type
                           and brand of refrigerator, including side-by-side,
                           bottom freezer, top freezer, French door, and compact
                           models. From leaky doors to faulty compressors, our
                           expert technicians have the knowledge and parts to
                           get your refrigerator back up and running.
                        </p>
                        <p className="mt-2 text-blue-500 text-right">
                           <a href="/washer">
                              Read more <ArrowRight />
                           </a>
                        </p>
                     </div>
                  </div>

                  <div className="flex mt-6 md:mt-0 flex-row justify-end">
                     <div className="px-10 text-right min-w-[350px]">
                        <h2 className="text-2xl">Dishwasher Repair</h2>
                        <p className="text-gray-500 mt-4 max-w-[500px]">
                           Is your dishwasher leaving dishes dirty, not
                           draining, or making strange noises? We’re here to
                           help! Our experienced technicians specialize in
                           diagnosing and repairing all major dishwasher brands
                           and models.
                        </p>
                        <p className="mt-2 text-blue-500 text-right ">
                           <a href="/washer">
                              Read more <ArrowRight />
                           </a>
                        </p>
                     </div>
                  </div>
                  <div className="pl-20 items-center flex ">
                     <Countertops
                        style={{ fontSize: 100 }}
                        className="text-blue-500"
                     />
                  </div>
                  <div className="flex items-center justify-end pr-20">
                     <Microwave
                        style={{ fontSize: 100 }}
                        className="text-blue-500"
                     />
                  </div>
                  <div className="flex justify-start pt-10">
                     <div className="px-10 text-left min-w-[350px]">
                        <h2 className="text-2xl ">
                           Stove, Oven & Cooktop Repair
                        </h2>
                        <p className="text-gray-500 mt-4 max-w-[500px]">
                           Cooking appliance problems can be a real hassle —
                           whether your oven won't heat, your stove won't
                           ignite, or your cooktop isn't responding, we’ve got
                           you covered. Our skilled technicians repair gas and
                           electric units of all major brands.
                        </p>
                        <p className="mt-2 text-blue-500 text-right">
                           <a href="/washer">
                              Read more <ArrowRight />
                           </a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
