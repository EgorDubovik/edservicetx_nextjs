import Location from "../public/repair.png";
import Image from "next/image";

const areas = [
   "Plano",
   "McKinney",
   "Allen",
   "Frisco",
   "Fairview",
   "Prosper",
   "Melissa",
   "Little Elm",
   "The Colony",
   "Richardson",
];

export default function LocationSection() {
   return (
      <section className="overflow-hidden" id="repairs">
         <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* Image */}
            <div className="relative min-h-[320px] lg:min-h-[520px]">
               <Image
                  src={Location}
                  alt="Service area"
                  fill
                  className="object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 lg:to-white/5" />
            </div>

            {/* Content */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white px-8 py-14 lg:px-16 flex flex-col justify-center">
               <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">
                  Coverage Area
               </p>
               <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
                  We Serve the
                  <br />
                  <span className="text-blue-400">North Dallas</span> Metro
               </h2>
               <p className="text-slate-400 mb-10 max-w-sm">
                  Our technicians are available across the North Dallas area for
                  fast, reliable service.
               </p>

               <div className="grid grid-cols-2 gap-3">
                  {areas.map((area) => (
                     <div
                        key={area}
                        className="flex items-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-2.5 transition-colors duration-200"
                     >
                        <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                        <span className="text-lg font-medium text-slate-200">
                           {area}
                        </span>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
