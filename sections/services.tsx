import repair from "../public/repair1.jpg";
import meintence from "../public/Maintenance.png";
import installation from "../public/Plug.png";

import Image from "next/image";
import Brands from "./components/brands";
import {
   ElectricalServices,
   Handyman,
   PendingActions,
} from "@mui/icons-material";
export default function Services() {
   return (
      <section className="py-10  bg-gray-50" id="services">
         <div className="container">
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
                           {/* <Image
                              src={installation}
                              alt="appliance installation"
                              height={70}
                              className="my-4"
                           /> */}
                        </div>
                        <div className="text-left col-span-2">
                           <h2 className="text-xl font-semibold">
                              Appliance Installation
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
                           {/* <Image
                              src={repair}
                              alt="appliance repair"
                              height={70}
                              className="my-4"
                           /> */}
                        </div>
                        <div className="text-left col-span-2">
                           <h2 className="text-xl font-semibold">
                              Appliance Repair
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
                           {/* <Image
                              src={meintence}
                              alt="appliance maintenance"
                              height={70}
                              className="my-4"
                           /> */}
                        </div>
                        <div className="text-left col-span-2">
                           <h2 className="text-xl font-semibold">
                              Appliance Maintenance
                           </h2>

                           <p className="text-gray-500 mt-4">
                              Don't wait until your appliance breaks before
                              getting it fixed.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <p className="text-gray-900 my-20 text-2xl">
                  Washer, Dryer, Refrigerator, Dishwasher, Oven, Range, Stove
                  and Microwave
               </p>
            </div>
         </div>
         <Brands />
      </section>
   );
}
