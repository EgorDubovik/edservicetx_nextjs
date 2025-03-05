import Bosh from "../public/logos/BOSCH.png";
import Electrolux from "../public/logos/Electrolux.png";
import Frigidaire from "../public/logos/Frigidaire.png";
import GE from "../public/logos/GE_Applaince.png";
import Whirlpool from "../public/logos/Whirlpool.png";
import Samsung from "../public/logos/Samsung.png";
import LG from "../public/logos/LG.png";
import Thermador from "../public/logos/Thermador.png";
import Mytag from "../public/logos/MAYTAG.png";
import KitchenAid from "../public/logos/KitchenAid.png";
import Janair from "../public/logos/Jenn-Air.png";
import Hotpoint from "../public/logos/Hotpoint.png";
import repair from "../public/repair1.jpg";
import meintence from "../public/Maintenance.png";
import installation from "../public/Plug.png";

import Image from "next/image";
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
         <div className="my-10 hidden md:block">
            <div className="flex items-center justify-center gap-x-8 opacity-40">
               <Image src={Bosh} alt="Bosh" height={50} />
               <Image src={Electrolux} alt="Electrolux" height={50} />
               <Image src={Frigidaire} alt="Frigidaire" height={50} />
               <Image src={GE} alt="GE" height={50} />
               <Image src={Whirlpool} alt="Whirlpool" height={40} />
               <Image src={KitchenAid} alt="KitchenAid" height={50} />
               <Image src={Samsung} alt="Samsung" height={50} />
               <Image src={LG} alt="LG" height={30} />
               <Image src={Thermador} alt="Thermador" height={50} />
               <Image src={Hotpoint} alt="Hotpoint" height={50} />
               <Image src={Janair} alt="Janair" height={50} />
               <Image src={Mytag} alt="Mytag" height={30} />
            </div>
         </div>
      </section>
   );
}
