"use client";
import { APP_CONFIG } from "../config/config";
import LogoBlack from "../public/logo4_black.png";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
export default function Header() {
   return (
      <header className="sticky top-0 z-50 bg-white">
         {/* <div className="bg-[#04122c] py-2 text-white text-lg">
            <div className="container mx-auto flex items-center justify-center md:justify-end">
               Call us today:{" "}
               <a href={`tel:${APP_CONFIG.PHONE_NUMBER}`} className="ml-2">
                  {APP_CONFIG.PHONE_NUMBER}
               </a>
            </div>
         </div> */}
         <div className="py-6">
            <div className="container mx-auto flex items-center justify-between">
               <div className="logo">
                  <a href="/">
                     <Image src={LogoBlack} alt="logo" height={50} />
                  </a>
               </div>
               <div className="menu">
                  <nav className="hidden md:flex gap-8 items-center">
                     <a href="#services">Services</a>
                     <a href="#repairs">Locations</a>
                     <a href="#gallery">Gallery</a>
                     <a href="#contact">Contact</a>
                     <a
                        target="_blank"
                        href={APP_CONFIG.BOOK_APP_URL}
                        className="btn-book ml-4"
                     >
                        Book appointment online
                     </a>
                  </nav>
                  <div className="md:hidden">
                     <MenuIcon />
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
}
