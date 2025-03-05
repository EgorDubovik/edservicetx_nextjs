"use client";
import { APP_CONFIG } from "../config/config";
import { useState } from "react";

export default function Contact() {
   const [formData, setFormData] = useState({
      name: "",
      phone: "",
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
            message: "",
         });
         return;
      }
      setLoadingStatus("error");
   };

   return (
      <section className="py-10 bg-white" id="contact">
         <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="px-12">
                  <h1 className="text-3xl font-semibold">
                     Choosing the Right Appliance repair
                  </h1>
                  <p className="py-4 text-gray-500">
                     Looking for appliance repair company ? We can fix any
                     appliance any brand. We have 4 years of successful work
                     experience fixing Major or Minor Appliance
                  </p>
                  <p className="text-gray-500 py-4">
                     Call us now to get started on your project
                  </p>
               </div>
               <div className="px-12">
                  <h1 className="text-3xl font-semibold">
                     Have a question? Contact Us
                  </h1>
                  <h3 className="mt-2 text-gray-500">
                     or call us at{" "}
                     <a
                        className="font-semibold text-orange-600 ml-2"
                        href={`tel:${APP_CONFIG.PHONE_NUMBER}`}
                     >
                        {APP_CONFIG.PHONE_NUMBER}
                     </a>
                  </h3>
                  <div className="form bg-[#012c70] mt-6 py-4 px-6 rounded-lg">
                     <form className="mt-2" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div>
                              <label
                                 htmlFor="phone"
                                 className="block text-sm font-medium text-white"
                              >
                                 Phone
                              </label>
                              <input
                                 type="tel"
                                 name="phone"
                                 onChange={handleInputChange}
                                 value={formData.phone}
                                 id="phone"
                                 required
                                 className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10 px-2 outline-none"
                              />
                           </div>
                           <div>
                              <label
                                 htmlFor="name"
                                 className="block text-sm font-medium text-white"
                              >
                                 Name
                              </label>
                              <input
                                 type="text"
                                 name="name"
                                 onChange={handleInputChange}
                                 value={formData.name}
                                 id="name"
                                 required
                                 className="mt-1 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md h-10 px-2 outline-none"
                              />
                           </div>
                        </div>
                        <div className="mt-6">
                           <label
                              htmlFor="description"
                              className="block text-sm font-medium text-white"
                           >
                              Your question
                           </label>
                           <textarea
                              id="description"
                              name="message"
                              onChange={handleInputChange}
                              value={formData.message}
                              required
                              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md outline-none p-2"
                              rows={5}
                           />
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                           <div className="status">
                              {loadingStatus === "sending" && (
                                 <span className="text-orange-500">
                                    Sending...
                                 </span>
                              )}
                              {loadingStatus === "success" && (
                                 <span className="text-green-500">
                                    Thank you! We will contact you soon.
                                 </span>
                              )}
                              {loadingStatus === "error" && (
                                 <span className="text-red-500">
                                    Error, something went wrong. Please try
                                    again.
                                 </span>
                              )}
                           </div>
                           <button
                              type="submit"
                              disabled={loadingStatus === "sending"}
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                           >
                              Send question
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
