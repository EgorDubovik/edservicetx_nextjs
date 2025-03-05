import { Gallery } from "next-gallery";

export default function GallerySection() {
   const images = [
      { src: "/gallery/1.jpeg", aspect_ratio: 4 / 3 },
      { src: "/gallery/2.jpeg", aspect_ratio: 4 / 3 },
      { src: "/gallery/3.jpeg", aspect_ratio: 4 / 3 },
      { src: "/gallery/4.jpeg", aspect_ratio: 4 / 3 },
      { src: "/gallery/5.jpeg", aspect_ratio: 4 / 3 },

      { src: "/gallery/7.jpeg", aspect_ratio: 4 / 3 },
      { src: "/gallery/8.jpeg", aspect_ratio: 4 / 3 },
      { src: "/gallery/9.jpeg", aspect_ratio: 4 / 3 },
      { src: "/gallery/10.jpeg", aspect_ratio: 4 / 3 },
      { src: "/gallery/11.jpg", aspect_ratio: 4 / 3 },
   ];
   const widths = [400, 800, 1200];
   const ratios = [3, 4, 6, 7];
   return (
      <section className="py-10 bg-[#0f5299]" id="gallery">
         <div className="text-center mb-6">
            <h1 className="text-3xl font-semibold text-white">
               Our Gallery and projects
            </h1>
         </div>
         <div className="container">
            <Gallery images={images} widths={widths} ratios={ratios} />
         </div>
      </section>
   );
}
