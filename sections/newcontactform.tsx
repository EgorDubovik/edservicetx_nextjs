"use client";
import { useState } from "react";
import { APP_CONFIG } from "@/config/config";
import { Email, Map, Phone } from "@mui/icons-material";
import LogoBlack from "../public/logo4_black.png";
import Image from "next/image";

export default function NewContactForm() {
   const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
      message: "",
   });
   const [loadingStatus, setLoadingStatus] = useState("");

   const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoadingStatus("sending");
      const rest = await fetch("/api/send-email", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
      });
      const { success, message } = await rest.json();
      if (success) {
         setLoadingStatus("success");
         setFormData({
            name: "",
            phone: "",
            email: "",
            message: "",
         });
         return;
      }
      setLoadingStatus("error");
   };

   return (
      <>
         <section>
            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="left bg-blue-100 text-gray-700 py-6 flex justify-end">
                  <div className="information p-10 md:pr-20">
                     <h1
                        className="text-3xl font-semibold"
                        style={{ lineHeight: 1.2 }}
                     >
                        Contact Us any time
                     </h1>
                     <p className="py-4 text-gray-500">
                        We are available 24/7 to help you with any appliance
                        repair needs.
                     </p>
                     <div className="mt-6 grid grid-flow-row gap-y-6">
                        <div className="flex items-center justify-start bg-white rounded px-4 py-2 shadow-md">
                           <Phone
                              style={{ fontSize: 35 }}
                              className="text-blue-500"
                           />
                           <div className="ml-4">
                              <div className="font-bold">Call us</div>
                              <a href={`tel:${APP_CONFIG.PHONE_NUMBER}`}>
                                 {APP_CONFIG.PHONE_NUMBER}
                              </a>
                           </div>
                        </div>
                        <div className="flex items-center justify-start bg-white rounded px-4 py-2 shadow-md">
                           <Email
                              style={{ fontSize: 35 }}
                              className="text-blue-500"
                           />

                           <div className="ml-4">
                              <div className="font-bold">Email us</div>
                              <a href={`mailto:${APP_CONFIG.EMAIL}`}>
                                 {APP_CONFIG.EMAIL}
                              </a>
                           </div>
                        </div>
                        <div className="flex items-center justify-start bg-white rounded px-4 py-2 shadow-md">
                           <Map
                              style={{ fontSize: 35 }}
                              className="text-blue-500"
                           />

                           <div className="ml-4">
                              <div className="font-bold">Map us</div>
                              2901 Ridgeview Dr, Plano, TX 75025
                           </div>
                        </div>
                        {/* <div className="mt-6">
                           <Image src={LogoBlack} alt="logo" height={70} />
                        </div> */}
                     </div>
                  </div>
               </div>
               <div className="bg-blue-800 py-6 text-gray-100 flex justify-start">
                  <div className="p-10 md:pl-20">
                     <h1 className="text-3xl font-semibold">
                        Still have questions?
                     </h1>
                     <p className="py-4 text-gray-400">
                        Fill out the form below and we will get back to you
                     </p>
                     <form className="mt-2" onSubmit={handleSubmit}>
                        <div className="form-conteiner grid grid-flow-row gap-y-6 text-gray-900">
                           <input
                              type="text"
                              placeholder="Enter your name"
                              className="bg-white h-10 rounded px-4 shadow outline-none"
                              name="name"
                              required
                              onChange={handleInputChange}
                              value={formData.name}
                           />
                           <input
                              type="text"
                              placeholder="Enter your phone number"
                              className="bg-white h-10 rounded px-4 shadow outline-none"
                              name="phone"
                              required
                              onChange={handleInputChange}
                              value={formData.phone}
                           />
                           <input
                              type="text"
                              placeholder="Enter your email"
                              className="bg-white h-10 rounded px-4 shadow"
                              name="email"
                              onChange={handleInputChange}
                              value={formData.email}
                           />
                           <textarea
                              placeholder="Enter your message"
                              className="bg-white h-20 rounded px-4 py-2 shadow outline-none"
                              name="message"
                              required
                              onChange={handleInputChange}
                              value={formData.message}
                           />
                           <div className="status">
                              {loadingStatus === "sending" && (
                                 <div className="text-white animate-pulse py-2 px-4 bg-blue-500/20 rounded">
                                    Sending...
                                 </div>
                              )}
                              {loadingStatus === "success" && (
                                 <div className="text-green-300 py-2 px-4 bg-green-500/20 rounded">
                                    Thank you! We will contact you soon.
                                 </div>
                              )}
                              {loadingStatus === "error" && (
                                 <div className="text-red-500 py-2 px-4 bg-white">
                                    Error, something went wrong. Please try
                                    again.
                                 </div>
                              )}
                           </div>
                           <button
                              type="submit"
                              className="bg-blue-500 text-white w-full h-10 rounded px-4"
                           >
                              Send Message
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
