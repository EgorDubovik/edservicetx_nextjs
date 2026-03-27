"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const images = [
   { src: "/gallery/1.jpeg" },
   { src: "/gallery/2.jpeg" },
   { src: "/gallery/3.jpeg" },
   { src: "/gallery/4.jpeg" },
   { src: "/gallery/5.jpeg" },
   { src: "/gallery/7.jpeg" },
   { src: "/gallery/8.jpeg" },
   { src: "/gallery/9.jpeg" },
   { src: "/gallery/10.jpeg" },
   { src: "/gallery/11.jpg" },
];

function getRandomIndexes(total: number, count: number): number[] {
   const shuffled = Array.from({ length: total }, (_, i) => i).sort(
      () => Math.random() - 0.5,
   );
   return shuffled.slice(0, count);
}

export default function GallerySection() {
   const [activeIndex, setActiveIndex] = useState<number | null>(null);
   const [imgLoading, setImgLoading] = useState(false);
   const [gridIndexes, setGridIndexes] = useState<number[]>(() =>
      Array.from({ length: Math.min(10, images.length) }, (_, i) => i),
   );

   useEffect(() => {
      setGridIndexes(getRandomIndexes(images.length, 10));
   }, []);

   const close = useCallback(() => setActiveIndex(null), []);

   const prev = useCallback(() => {
      setImgLoading(true);
      setActiveIndex((i) =>
         i !== null ? (i - 1 + images.length) % images.length : null,
      );
   }, []);

   const next = useCallback(() => {
      setImgLoading(true);
      setActiveIndex((i) => (i !== null ? (i + 1) % images.length : null));
   }, []);

   useEffect(() => {
      if (activeIndex === null) return;
      const handler = (e: KeyboardEvent) => {
         if (e.key === "Escape") close();
         if (e.key === "ArrowLeft") prev();
         if (e.key === "ArrowRight") next();
      };
      window.addEventListener("keydown", handler);
      return () => window.removeEventListener("keydown", handler);
   }, [activeIndex, close, prev, next]);

   return (
      <section className="py-10 bg-[#0f5299]" id="gallery">
         <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold text-white">
               Our Gallery and projects
            </h1>
         </div>

         <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
               {gridIndexes.map((imgIdx) => (
                  <div
                     key={imgIdx}
                     className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
                     onClick={() => {
                        setImgLoading(true);
                        setActiveIndex(imgIdx);
                     }}
                  >
                     <Image
                        src={images[imgIdx].src}
                        alt={`Gallery photo ${imgIdx + 1}`}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                     />
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <svg
                           className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                           />
                        </svg>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Lightbox */}
         {activeIndex !== null && (
            <div
               className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
               onClick={close}
            >
               {/* Close button */}
               <button
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
                  onClick={close}
                  aria-label="Close"
               >
                  <svg
                     className="w-9 h-9"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                     />
                  </svg>
               </button>

               {/* Counter */}
               <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
                  {activeIndex + 1} / {images.length}
               </div>

               {/* Prev button */}
               <button
                  className="absolute left-3 sm:left-6 text-white/80 hover:text-white transition-colors z-10 p-2"
                  onClick={(e) => {
                     e.stopPropagation();
                     prev();
                  }}
                  aria-label="Previous"
               >
                  <svg
                     className="w-9 h-9"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                     />
                  </svg>
               </button>

               {/* Image */}
               <div
                  className="relative w-full h-full max-w-5xl max-h-[85vh] mx-16 sm:mx-20"
                  onClick={(e) => e.stopPropagation()}
               >
                  {imgLoading && (
                     <div className="absolute inset-0 flex items-center justify-center z-10">
                        <svg
                           className="w-12 h-12 text-white animate-spin"
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
                     </div>
                  )}
                  <Image
                     src={images[activeIndex].src}
                     alt={`Gallery photo ${activeIndex + 1}`}
                     fill
                     sizes="100vw"
                     className={`object-contain transition-opacity duration-300 ${imgLoading ? "opacity-0" : "opacity-100"}`}
                     priority
                     onLoad={() => setImgLoading(false)}
                  />
               </div>

               {/* Next button */}
               <button
                  className="absolute right-3 sm:right-6 text-white/80 hover:text-white transition-colors z-10 p-2"
                  onClick={(e) => {
                     e.stopPropagation();
                     next();
                  }}
                  aria-label="Next"
               >
                  <svg
                     className="w-9 h-9"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                     />
                  </svg>
               </button>

               {/* Thumbnails strip */}
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-2 py-1">
                  {images.map((img, idx) => (
                     <div
                        key={img.src + idx}
                        className={`relative w-12 h-9 flex-shrink-0 rounded overflow-hidden cursor-pointer transition-all duration-200 ${
                           idx === activeIndex
                              ? "ring-2 ring-white opacity-100"
                              : "opacity-50 hover:opacity-80"
                        }`}
                        onClick={(e) => {
                           e.stopPropagation();
                           setImgLoading(true);
                           setActiveIndex(idx);
                        }}
                     >
                        <Image
                           src={img.src}
                           alt=""
                           fill
                           sizes="48px"
                           className="object-cover"
                        />
                     </div>
                  ))}
               </div>
            </div>
         )}
      </section>
   );
}
