import { BookOnline, Email, Phone } from "@mui/icons-material";
import { APP_CONFIG } from "../config/config";

export default function Footer() {
   return (
      <footer className="bg-gray-900 text-white">
         <div className="container mx-auto text-center">
            <div className="grid md:grid-cols-3">
               <div className="py-4">
                  <BookOnline />
                  <a
                     target="_blank"
                     href={APP_CONFIG.BOOK_APP_URL}
                     className="ml-2"
                  >
                     Book appointment online
                  </a>
               </div>
               <div className="py-4 border-y md:border-x border-gray-600">
                  <Phone />
                  <a href={`tel:${APP_CONFIG.PHONE_NUMBER}`} className="ml-2">
                     {APP_CONFIG.PHONE_NUMBER}
                  </a>
               </div>
               <div className="py-4">
                  <Email />
                  <a href={`mailto:${APP_CONFIG.EMAIL}`} className="ml-2">
                     {APP_CONFIG.EMAIL}
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
}
