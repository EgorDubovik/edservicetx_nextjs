import repair from "../public/repair1.jpg";
import meintence from "../public/Maintenance.png";
import installation from "../public/Plug.png";

import Image from "next/image";
import Brands from "./components/brands";
export default function Services() {
   return (
      <section className="py-10  bg-white" id="services">
         <div className="container">
            <div className="text-center">
               <h1 className="text-3xl font-semibold">
                  We provide services such as
               </h1>
               <div className="w-[200px] border-b border-gray-400 mx-auto my-4"></div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  <div className="border border-gray-300 rounded-lg p-4 justify-items-center">
                     <h2 className="text-xl font-semibold">Installation</h2>

                     <Image
                        src={installation}
                        alt="installation"
                        height={70}
                        className="my-4"
                     />
                     <p className="text-gray-500 mt-2">starting at $150</p>
                  </div>
                  <div className="border border-gray-300 rounded-lg p-4 justify-items-center">
                     <h2 className="text-xl font-semibold">Repair</h2>

                     <Image
                        src={repair}
                        alt="repair"
                        height={70}
                        className="my-4"
                     />
                     <p className="text-gray-500 mt-2">starting at $65</p>
                  </div>

                  <div className="border border-gray-300 rounded-lg p-4 justify-items-center">
                     <h2 className="text-xl font-semibold">Maintenance</h2>

                     <Image
                        src={meintence}
                        alt="meintence"
                        height={70}
                        className="my-4"
                     />
                     <p className="text-gray-500 mt-2">starting at $150</p>
                  </div>
               </div>
               <p className="text-gray-900 mt-20 text-2xl">
                  Washer, Dryer, Refrigerator, Dishwasher, Oven, Range, Stove
                  and Microwave
               </p>
            </div>
         </div>
         <Brands />
      </section>
   );
}
