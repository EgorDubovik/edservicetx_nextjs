import { APP_CONFIG } from "@/config/config";

export default function Explanations() {
   return (
      <section className="py-10 md:pt-20">
         <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="space-y-4 px-10">
                  <h2 className="text-2xl font-semibold">Washer Repair</h2>
                  <p className="text-gray-600">
                     Is your washing machine not working properly? We can help
                     you identify and fix the issue. Our experienced technicians
                     will diagnose and repair or replace broken parts to get
                     your washer back up and running.
                  </p>
                  <ul className="list-disc list-inside">
                     <li>Leaks and water damage</li>
                     <li>Noisy operation</li>
                     <li>Failure to spin or drain</li>
                     <li>Not heating or cooling properly</li>
                     <li>Broken or worn out parts</li>
                  </ul>
               </div>
               <div className="space-y-4 px-10">
                  <h2 className="text-2xl font-semibold">Dryer Repair</h2>
                  <p className="text-gray-600">
                     Is your dryer not working properly? We can help you
                     identify and fix the issue. Our experienced technicians
                     will diagnose and repair or replace broken parts to get
                     your dryer back up and running.
                  </p>
                  <ul className="list-disc list-inside">
                     <li>No heat or not drying properly</li>
                     <li>Unusual noises or vibrations</li>
                     <li>Leaks and water damage</li>
                     <li>Not spinning or turning</li>
                     <li>Broken or worn out parts</li>
                  </ul>
               </div>
            </div>
            <div className="text-center pt-20 text-lg text-gray-600">
               <a
                  href={APP_CONFIG.BOOK_APP_URL}
                  className="mr-2 text-orange-600"
               >
                  Book appointment today
               </a>
               or call us at
               <a
                  href={`tel:${APP_CONFIG.PHONE_NUMBER}`}
                  className="ml-2 text-blue-600"
               >
                  {APP_CONFIG.PHONE_NUMBER}
               </a>
            </div>
         </div>
      </section>
   );
}
