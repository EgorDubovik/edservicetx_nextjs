import { APP_CONFIG } from "@/config/config";

export default function Explanations() {
   return (
      <section className="py-10 md:pt-20">
         <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               {/* Common Problems */}
               <div className="space-y-4 px-10">
                  <h2 className="text-2xl font-semibold">Dishwasher Repair</h2>
                  <p className="text-gray-600">
                     Is your dishwasher leaving dishes dirty, not draining, or
                     leaking onto your floor? Our certified technicians diagnose
                     and fix all types of dishwasher problems quickly. We
                     service all major brands — Bosch, KitchenAid, Whirlpool,
                     Samsung, LG, Maytag, GE, and more.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                     <li>Dishwasher not cleaning dishes properly</li>
                     <li>Water not draining after the cycle</li>
                     <li>Dishwasher leaking water on the floor</li>
                     <li>Door latch broken or not closing</li>
                     <li>Dishwasher not starting or no power</li>
                     <li>Control panel or buttons not responding</li>
                     <li>Unusual noises during the wash cycle</li>
                     <li>Dishes not drying after the cycle</li>
                     <li>Error codes on display</li>
                     <li>Spray arm clogged or broken</li>
                  </ul>
               </div>

               {/* Brands & What We Fix */}
               <div className="space-y-4 px-10">
                  <h2 className="text-2xl font-semibold">What We Repair</h2>
                  <p className="text-gray-600">
                     We repair built-in, portable, and countertop dishwashers.
                     Our technicians carry the most common replacement parts and
                     can complete most repairs in a single visit — saving you
                     time and keeping your kitchen running smoothly.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                     <li>Wash pump and drain pump replacement</li>
                     <li>Water inlet valve repair or replacement</li>
                     <li>Door gasket and latch repair</li>
                     <li>Control board and timer repair</li>
                     <li>Heating element replacement</li>
                     <li>Spray arm and rack repair</li>
                     <li>Float switch replacement</li>
                     <li>Bosch dishwasher error codes (E09, E15, E24, E25)</li>
                     <li>Samsung and LG dishwasher diagnostics</li>
                     <li>KitchenAid and Whirlpool dishwasher repair</li>
                  </ul>
               </div>
            </div>

            {/* Why fix instead of replace */}
            <div className="mt-16 px-10 bg-blue-50 rounded-xl py-10">
               <h2 className="text-2xl font-semibold mb-4">
                  Repair vs. Replace — We Help You Decide
               </h2>
               <p className="text-gray-600 mb-4">
                  A malfunctioning dishwasher doesn&apos;t always mean you need
                  a new one. In most cases, a professional repair costs
                  significantly less than replacement — and gets your appliance
                  working like new. Common issues like a broken door latch,
                  clogged drain pump, or worn-out water inlet valve are quick
                  and inexpensive to fix.
               </p>
               <p className="text-gray-600">
                  Our technicians will give you an honest written estimate
                  before any work begins. If a replacement makes more financial
                  sense, we&apos;ll tell you upfront. No surprises, no pressure.
               </p>
            </div>
         </div>
      </section>
   );
}
