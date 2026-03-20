import { APP_CONFIG } from "@/config/config";

export default function Explanations() {
   return (
      <section className="py-10 md:pt-20">
         <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               {/* Stove & Cooktop */}
               <div className="space-y-4 px-10">
                  <h2 className="text-2xl font-semibold">
                     Stove &amp; Cooktop Repair
                  </h2>
                  <p className="text-gray-600">
                     Gas burner won&apos;t ignite? Electric coil not heating?
                     Induction cooktop unresponsive? We repair all types of
                     stoves and cooktops — gas, electric, and induction — for
                     all major brands including GE, Samsung, LG, Whirlpool,
                     Bosch, KitchenAid, and more.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                     <li>Gas burner not igniting or clicking continuously</li>
                     <li>Electric burner not heating</li>
                     <li>Induction cooktop not detecting cookware</li>
                     <li>Surface element switch failure</li>
                     <li>Stove not turning on — no power</li>
                     <li>Gas smell near the stove</li>
                     <li>Control knob broken or loose</li>
                     <li>Touch control panel not responding</li>
                     <li>Error codes on display</li>
                     <li>Uneven heating on burners</li>
                  </ul>
               </div>

               {/* Oven Repair */}
               <div className="space-y-4 px-10">
                  <h2 className="text-2xl font-semibold">Oven Repair</h2>
                  <p className="text-gray-600">
                     Whether your oven won&apos;t heat to temperature, the
                     self-clean cycle isn&apos;t working, or the display went
                     dark — we diagnose and fix all oven problems for gas and
                     electric models, including wall ovens, range ovens, and
                     double ovens.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                     <li>Oven not heating or not reaching set temperature</li>
                     <li>Oven heating unevenly — burned top or bottom</li>
                     <li>Broiler element not working</li>
                     <li>Oven door not closing or seal damaged</li>
                     <li>Self-cleaning cycle failure</li>
                     <li>Oven display or clock not working</li>
                     <li>Igniter replacement (gas ovens)</li>
                     <li>Bake and broil element replacement</li>
                     <li>Temperature sensor calibration</li>
                     <li>Control board repair</li>
                  </ul>
               </div>
            </div>

            {/* Safety Note */}
            <div className="mt-16 px-10 bg-orange-50 rounded-xl py-10">
               <h2 className="text-2xl font-semibold mb-4">
                  Gas Appliance Repairs — Safety First
               </h2>
               <p className="text-gray-600 mb-4">
                  If you smell gas near your stove or oven, do not attempt to
                  repair it yourself. Gas leaks are dangerous and require a
                  certified technician to inspect and fix safely. Our
                  technicians are trained and certified to work on gas
                  appliances and will ensure your equipment is safe and
                  code-compliant.
               </p>
               <p className="text-gray-600">
                  For non-emergency gas appliance issues — igniter failures,
                  valve problems, burner issues — we offer same-day service in
                  Plano, Frisco, McKinney, and Allen. Call before 12 Noon and
                  we&apos;ll be there today.
               </p>
            </div>
         </div>
      </section>
   );
}
