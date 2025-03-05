import StarIcon from "../public/star.svg";
import GoogleIcon from "../public/google.svg";
import Image from "next/image";
export default function Review() {
   const reviews = [
      {
         name: "Valerii",
         stars: 5,
         review:
            "Yesterday, my three-year-old LG fridge stopped working, and it was a nightmare. I had to toss out all the spoiled food, which was such a waste. The problem turned out to be a faulty compressor that needed replacement. I contacted three different appliance repair companies for estimates, and I ended up choosing ED Service. Egor’s professionalism and clear communication made him stand out from the rest. The pricing was reasonable, so I went ahead with the repair. I’m so glad I did—my fridge is back to working perfectly, and the whole process was quick and hassle-free!",
         image: "https://lh3.googleusercontent.com/a-/ALV-UjWGiYnoB7ZEHX8y7CqVKbWM6ZtyXGIiq6TblxTOsu1_n6Y_TkqS=s120-c-rp-mo-ba2-br100",
      },
      {
         name: "Mike Rafferty",
         stars: 5,
         review:
            "ED service appliance repair did a great job fixing a recurring error code issue on our GE Monogram Double Oven. The ovens are 10 years old and we have the F97 error code coming in on a regular basis. EDservice knew the issue and got the part and came out the day after we contacted him and replaced the lower cooling fan. He completed the repair in less than an hour and the cost for parts and labor was very reasonable. This is the third time we have used EDservice for an appliance repair and we have been very pleased every time.",
         image: "https://lh3.googleusercontent.com/a/ACg8ocIBaqvaQpARhr0zNZTVT3Kx3DHxC5COMvvjACvl9L-Q-z4RPA=s120-c-rp-mo-br100",
      },
      {
         name: "Aaron Harper",
         stars: 5,
         review:
            "Very happy with the the expeort service on my thermador -- thank you Ed. very easy to work with and up front on all money issues. Thanks Ed -- Ed arrived on time and ready to go and got th job done in 30 minutes. Thanks again",
         image: "https://lh3.googleusercontent.com/a-/ALV-UjUWw9h6wRSA8a39Y5BSOJXAA_j8Y-fqKTxnfSiLzeTtgXttVYJ9xw=s120-c-rp-mo-br100",
      },
      {
         name: "Vance Norris",
         stars: 5,
         review:
            "Both ice makers in my refrigerator were not working. I called Friday afternoon and set an appointment for Saturday morning. Igor arrive on time at 9 and took the time to thoroughly diagnose the issues. He was able to take care of both with expert skill without the need of additional parts. I have added Ed Service to my phonebook and they will be my first call for any appliance repair.",
         image: "https://lh3.googleusercontent.com/a/ACg8ocJ8rZ1rse4uzUX67TAYA9yNM8KLtfxZwaFf0CjwSgufeuAHnA=s120-c-rp-mo-br100",
      },
   ];
   return (
      <section className="review py-10">
         <div className="container">
            <div className="text-center">
               <h1 className="text-3xl font-semibold text-gray-800">
                  Our clients say
               </h1>
               <div className="w-[200px] border-b border-gray-400 mx-auto my-4"></div>
            </div>
            <div className="flex-row md:flex items-center justify-center gap-5 mt-10">
               {reviews.map((review, index) => (
                  <div
                     key={index}
                     className="max-w-[300px] mt-4 md:mt-0 review_block border border-gray-200 p-4 rounded-lg"
                  >
                     <div className="flex items-center justify-start">
                        <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-blue-300">
                           {review.name[0]}
                        </div>
                        <div className="review_title ml-4">
                           <h3 className="text-md font-semibold">
                              {review.name}
                           </h3>
                           <div className="stars flex items-center">
                              {Array.from({ length: review.stars }).map(
                                 (_, index) => (
                                    <Image
                                       key={index}
                                       src={StarIcon}
                                       alt="star"
                                       height={20}
                                    />
                                 )
                              )}
                           </div>
                        </div>
                        <div className="ml-4">
                           <Image src={GoogleIcon} alt="google" height={30} />
                        </div>
                     </div>
                     <p className="text-gray-600 mt-4">
                        {review.review.length > 150 ? (
                           <>
                              {review.review.slice(0, 150)}...
                              <a
                                 className="text-blue-500 ml-1"
                                 href="https://www.google.com/maps/place/EDService+Appliance+Repair/@33.1104942,-96.7386956,3641m/data=!3m1!1e3!4m8!3m7!1s0x66e09080ce9a74e5:0x2c5eeb20f98fed68!8m2!3d33.11394!4d-96.7471703!9m1!1b1!16s%2Fg%2F11sjfy8hgx?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
                                 target="_blank"
                                 rel="noopener noreferrer"
                              >
                                 Read more
                              </a>
                           </>
                        ) : (
                           review.review
                        )}
                     </p>
                  </div>
               ))}
            </div>
            <div className="flex items-center justify-center mt-5 mb-10">
               <a
                  className="text-blue-700"
                  href="https://www.google.com/maps/place/EDService+Appliance+Repair/@33.1104942,-96.7386956,3641m/data=!3m1!1e3!4m8!3m7!1s0x66e09080ce9a74e5:0x2c5eeb20f98fed68!8m2!3d33.11394!4d-96.7471703!9m1!1b1!16s%2Fg%2F11sjfy8hgx?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
               >
                  Read <b>41</b> more reviews on{" "}
               </a>
               <Image
                  src={GoogleIcon}
                  alt="google"
                  height={30}
                  className="ml-2"
               />
            </div>
         </div>
      </section>
   );
}
