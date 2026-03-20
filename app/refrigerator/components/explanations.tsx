import { APP_CONFIG } from "@/config/config";

export default function Explanations() {
   return (
      <section className="py-10 md:pt-20">
         <div className="container">
            {/* General Refrigerator Repair */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="space-y-4 px-10">
                  <h2 className="text-2xl font-semibold">
                     Refrigerator Repair
                  </h2>
                  <p className="text-gray-600">
                     Is your refrigerator not cooling, making strange noises, or
                     leaking water? Our certified technicians diagnose and fix
                     all types of refrigerator problems quickly and affordably.
                     We service all major brands and models, including French
                     door, side-by-side, bottom-freezer, and top-freezer
                     refrigerators.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                     <li>Refrigerator not cooling or not cold enough</li>
                     <li>Freezer not freezing</li>
                     <li>Ice maker not making ice or leaking</li>
                     <li>Water dispenser not working</li>
                     <li>Unusual noises (buzzing, clicking, humming)</li>
                     <li>Refrigerator leaking water on the floor</li>
                     <li>Door gasket seal worn or damaged</li>
                     <li>Frost buildup inside the refrigerator or freezer</li>
                     <li>Compressor failure</li>
                     <li>Thermostat or temperature control issues</li>
                  </ul>
               </div>

               {/* LG Refrigerator Repair */}
               <div className="space-y-4 px-10">
                  <h2 className="text-2xl font-semibold">
                     LG Refrigerator Repair
                  </h2>
                  <p className="text-gray-600">
                     LG refrigerators are popular for their innovative features,
                     but they can develop specific issues over time. We
                     specialize in LG refrigerator repair, including French
                     door, InstaView, and side-by-side models. Our technicians
                     are experienced with LG&apos;s unique Linear Compressor
                     technology and Smart Diagnosis system.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                     <li>
                        LG Linear Compressor failure — refrigerator not cooling
                     </li>
                     <li>LG French Door refrigerator ice maker problems</li>
                     <li>LG InstaView Door-in-Door not working</li>
                     <li>LG refrigerator error codes (Er IF, Er dH, Er FF)</li>
                     <li>LG Smart Diagnosis troubleshooting</li>
                     <li>LG water and ice dispenser repair</li>
                     <li>LG refrigerator fan motor replacement</li>
                     <li>LG freezer not freezing properly</li>
                     <li>LG refrigerator excessive frost buildup</li>
                     <li>LG control board and display issues</li>
                  </ul>
               </div>
            </div>

            {/* LG Detail Section */}
            <div className="mt-16 px-10 bg-blue-50 rounded-xl py-10">
               <h2 className="text-2xl font-semibold mb-4">
                  Why LG Refrigerator Repair Requires a Specialist
               </h2>
               <p className="text-gray-600 mb-4">
                  LG refrigerators use a patented{" "}
                  <strong>Linear Compressor</strong> technology that offers
                  quiet operation and energy efficiency. However, these
                  compressors are prone to failure — often within 5–7 years —
                  causing the refrigerator to stop cooling entirely. This is one
                  of the most common LG refrigerator issues we see in Plano,
                  Frisco, McKinney, and Allen.
               </p>
               <p className="text-gray-600 mb-4">
                  Our technicians are trained to diagnose LG compressor failures
                  accurately. In many cases, compressor replacement is covered
                  under LG&apos;s extended 10-year compressor warranty — and we
                  can help you navigate that process.
               </p>
               <p className="text-gray-600">
                  Beyond compressors, LG French Door refrigerators are known for
                  ice maker issues — including the ice maker freezing over,
                  producing no ice, or dispensing crushed ice incorrectly. We
                  carry the parts and have the expertise to resolve these issues
                  same-day in most cases.
               </p>
            </div>
         </div>
      </section>
   );
}
