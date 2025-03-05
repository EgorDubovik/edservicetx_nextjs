import DoneAllIcon from "@mui/icons-material/DoneAll";
import Location from "../public/repair.png";
import Image from "next/image";
import { APP_CONFIG } from "../config/config";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function LocationSection() {
   return (
      <section className=" bg-white" id="repairs">
         <div className="grid grid-cols-1 md:grid-cols-2 bg-[#e6ecf2]">
            <div>
               <Image src={Location} alt="Location" height={573} />
            </div>
            <div>
               <div className="py-10 w-10/12 mx-auto md:mt-10 ">
                  <h1 className="text-3xl font-semibold text-center">
                     We provide services in the following areas
                  </h1>
                  <div className="grid grid-cols-2 mt-10">
                     <div className="text-2xl text-gray-700 gap-y-4 grid grid-rows justify-center">
                        <p>
                           <DoneAllIcon style={{ color: "green" }} /> Plano
                        </p>
                        <p>
                           <DoneAllIcon style={{ color: "green" }} /> McKinney
                        </p>
                        <p>
                           <DoneAllIcon style={{ color: "green" }} /> Allen
                        </p>
                        <p>
                           <DoneAllIcon style={{ color: "green" }} /> Frisco
                        </p>
                        <p>
                           <DoneAllIcon style={{ color: "green" }} /> Fairview
                        </p>
                     </div>
                     <div className="text-2xl text-gray-700 gap-y-4 grid grid-rows justify-center">
                        <p>
                           <DoneAllIcon style={{ color: "green" }} /> Prosper
                        </p>
                        <p>
                           <DoneAllIcon style={{ color: "green" }} /> Melissa
                        </p>
                        <p>
                           <DoneAllIcon style={{ color: "green" }} /> Little Elm
                        </p>
                        <p>
                           <DoneAllIcon style={{ color: "green" }} /> The Colony
                        </p>
                        <p>
                           <DoneAllIcon style={{ color: "green" }} /> Richardson
                        </p>
                     </div>
                  </div>
               </div>
               {/* <div className="grid grid-cols-1 md:grid-cols-5 justify-center items-center">
                  <div className="col-span-2 ">
                     <a
                        href={APP_CONFIG.BOOK_APP_URL}
                        className="btn-call text-lg md:text-2xl flex items-center justify-center"
                     >
                        <LocalPhoneIcon className="mr-2" />
                        {APP_CONFIG.PHONE_NUMBER}
                     </a>
                  </div>

                  <div className="text-center">Or</div>

                  <div className="col-span-2">
                     <a
                        href={APP_CONFIG.BOOK_APP_URL}
                        className="btn-book text-lg md:text-2xl flex items-center justify-center"
                     >
                        Book appointment online
                     </a>
                  </div>
               </div> */}
            </div>
         </div>
      </section>
   );
}
