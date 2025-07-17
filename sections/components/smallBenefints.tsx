import { CheckCircle } from "@mui/icons-material";

const SmallBenefints = () => {
   return (
      <section className="bg-gray-100 py-8">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
               <div className="flex justify-center">
                  <span className="text-gray-700 font-medium flex items-center">
                     <CheckCircle className="text-green-500 mr-2" />
                     24/7 Service
                  </span>
               </div>
               <div className="flex justify-center">
                  <span className="text-gray-700 font-medium flex items-center">
                     <CheckCircle className="text-green-500 mr-2" />
                     Licensed &amp; Insured
                  </span>
               </div>
               <div className="flex justify-center">
                  <span className="text-gray-700 font-medium flex items-center">
                     <CheckCircle className="text-green-500 mr-2" />
                     Same-Day Repair
                  </span>
               </div>
               <div className="flex justify-center">
                  <span className="text-gray-700 font-medium flex items-center">
                     <CheckCircle className="text-green-500 mr-2" />
                     90 days / 180 days or 1 year Warranty
                  </span>
               </div>
               <div className="flex justify-center">
                  <span className="text-gray-700 font-medium flex items-center">
                     <CheckCircle className="text-green-500 mr-2" />
                     No Hidden Fees
                  </span>
               </div>
            </div>
         </div>
      </section>
   );
};

export default SmallBenefints;
