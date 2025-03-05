import { APP_CONFIG } from "@/config/config";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function CallSection() {
   return (
      <section className="py-10 bg-[#0f5299]">
         <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               <div className="text-white col-span-2">
                  <h1 className="text-3xl font-semibold">
                     Your family is comfortable with working appliance
                  </h1>
                  <p className="text-gray-200 mt-4">
                     We are a full-service appliance repair company specializing
                     in kitchen and bathroom appliances.
                  </p>
               </div>
               <div className="text-white flex items-center justify-center md:justify-end gap-2 text-4xl">
                  <a
                     href={`tel:${APP_CONFIG.PHONE_NUMBER}`}
                     className="flex items-center gap-2 border border-white rounded-lg px-4 py-2"
                  >
                     <LocalPhoneIcon style={{ fontSize: 35 }} />
                     {APP_CONFIG.PHONE_NUMBER}
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
}
