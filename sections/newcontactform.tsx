"use client";
import { useState } from "react";
import { APP_CONFIG } from "@/config/config";
import { Email, LocationOn, Phone } from "@mui/icons-material";
import handleClick from "@/app/lib/call-api";

function SuccessAlert({ onClose }: { onClose: () => void }) {
   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
         <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center animate-[scaleIn_0.3s_ease-out]">
            {/* Checkmark circle */}
            <div className="mx-auto mb-5 w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
               <svg
                  className="w-10 h-10 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M5 13l4 4L19 7"
                  />
               </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
               Message Sent!
            </h2>
            <p className="text-gray-500 mb-6">
               Thank you for reaching out. We&apos;ll get back to you as soon as
               possible.
            </p>
            <button
               onClick={onClose}
               className="w-full bg-green-500 hover:bg-green-600 active:scale-95 transition-all text-white font-semibold py-2.5 rounded-xl"
            >
               OK
            </button>
         </div>
      </div>
   );
}

const contactItems = [
   {
      icon: <Phone className="text-blue-600" style={{ fontSize: 26 }} />,
      label: "Phone",
      content: (
         <a
            href={`tel:${APP_CONFIG.PHONE_NUMBER}`}
            className="text-blue-700 font-medium hover:underline"
            onClick={() => handleClick("btn-call-callsection")}
         >
            {APP_CONFIG.PHONE_NUMBER}
         </a>
      ),
   },
   {
      icon: <Email className="text-blue-600" style={{ fontSize: 26 }} />,
      label: "Email",
      content: (
         <a
            href={`mailto:${APP_CONFIG.EMAIL}`}
            className="text-blue-700 font-medium hover:underline"
         >
            {APP_CONFIG.EMAIL}
         </a>
      ),
   },
   {
      icon: <LocationOn className="text-blue-600" style={{ fontSize: 26 }} />,
      label: "Address",
      content: (
         <span className="text-gray-700">
            2901 Ridgeview Dr, Plano, TX 75025
         </span>
      ),
   },
];

export default function NewContactForm() {
   const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
      message: "",
   });
   const [sending, setSending] = useState(false);
   const [showSuccess, setShowSuccess] = useState(false);
   const [error, setError] = useState(false);

   const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
   ) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setSending(true);
      setError(false);
      const res = await fetch("/api/send-email", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(formData),
      });
      const { success } = await res.json();
      setSending(false);
      if (success) {
         setFormData({ name: "", phone: "", email: "", message: "" });
         setShowSuccess(true);
      } else {
         setError(true);
      }
   };

   const inputClass =
      "w-full bg-white/10 border border-white/20 focus:border-blue-300 focus:bg-white/15 outline-none rounded-xl px-4 py-2.5 text-white placeholder-white/50 transition-colors duration-200";

   return (
      <>
         {showSuccess && <SuccessAlert onClose={() => setShowSuccess(false)} />}

         <section
            id="contact"
            className="bg-gradient-to-br from-slate-50 to-blue-50"
         >
            <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
               {/* Left — info */}
               <div>
                  <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">
                     Get in touch
                  </p>
                  <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
                     Contact Us
                     <br />
                     Any Time
                  </h2>
                  <p className="text-gray-500 mb-6 max-w-sm">
                     Have a question or need a quote? We&apos;re here to help —
                     reach out through any channel below.
                  </p>

                  <div className="space-y-3">
                     {contactItems.map((item) => (
                        <div
                           key={item.label}
                           className="flex items-center gap-4 bg-white rounded-2xl px-5 py-2 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                           <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                              {item.icon}
                           </div>
                           <div>
                              <div className="text-md text-gray-400 font-medium mb-0.5">
                                 {item.label}
                              </div>
                              <div className="text-lg">{item.content}</div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Right — form */}
               <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-8 shadow-xl text-white">
                  <h3 className="text-2xl font-bold mb-1">
                     Still have questions?
                  </h3>
                  <p className="text-white/60 text-sm mb-7">
                     Fill out the form and we&apos;ll get back to you shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                           type="text"
                           name="name"
                           placeholder="Your name"
                           required
                           value={formData.name}
                           onChange={handleInputChange}
                           className={inputClass}
                        />
                        <input
                           type="text"
                           name="phone"
                           placeholder="Phone number"
                           required
                           value={formData.phone}
                           onChange={handleInputChange}
                           className={inputClass}
                        />
                     </div>
                     <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={inputClass}
                     />
                     <textarea
                        name="message"
                        placeholder="Your message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={inputClass + " resize-none"}
                     />

                     {error && (
                        <div className="flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-xl px-4 py-2.5 text-red-200 text-sm">
                           <svg
                              className="w-4 h-4 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                           >
                              <path
                                 fillRule="evenodd"
                                 d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                 clipRule="evenodd"
                              />
                           </svg>
                           Something went wrong. Please try again.
                        </div>
                     )}

                     <button
                        type="submit"
                        disabled={sending}
                        className="w-full bg-white text-blue-800 font-semibold py-3 rounded-xl hover:bg-blue-50 active:scale-95 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                     >
                        {sending ? (
                           <>
                              <svg
                                 className="w-4 h-4 animate-spin"
                                 fill="none"
                                 viewBox="0 0 24 24"
                              >
                                 <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                 />
                                 <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                 />
                              </svg>
                              Sending...
                           </>
                        ) : (
                           "Send Message"
                        )}
                     </button>
                  </form>
               </div>
            </div>
         </section>

         <style jsx global>{`
            @keyframes scaleIn {
               from {
                  opacity: 0;
                  transform: scale(0.85);
               }
               to {
                  opacity: 1;
                  transform: scale(1);
               }
            }
         `}</style>
      </>
   );
}
