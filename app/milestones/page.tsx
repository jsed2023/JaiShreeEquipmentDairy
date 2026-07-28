"use client";
import { Image } from "@/components/Image";
import MilestonesTimeline from "@/components/MilestonesTimeline";
import { cld } from "@/utils/cloudinary";
export default function MilestonesPage() {
  return (
    <>
      <section>
       <div className="mt-10 bg-sky-100 dark:bg-sky-900 text-sky-900 dark:text-sky-100 py-10">
  <h1
    className="
      relative w-full text-center
      text-lg font-bold
      sm:text-4xl
      bg-clip-text text-transparent
      animate-title-gradient
    "
  >
    Jai Shree Equipment Dairy Milestones & Company Journey
  </h1>
</div>
          <div className="flex justify-center my-5">
            <Image
           src={cld("Milestones_Journey.webp")}
           alt="Milestones_Journey"
           width={700}
           height={400}
            />
                 
                  </div>
        </section>
      <section className="py-24">
        <div className="bg-gray-900 rounded-2xl p-10 shadow-xl text-center">
          <span className="block text-teal-500 text-4xl font-bold uppercase tracking-wide">
            Our Journey
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-4 text-white">
            Milestones That Define Our Growth
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            From our foundation to becoming a trusted dairy equipment provider,
            every milestone reflects our commitment to quality and service.
          </p>
        </div>
      </section>

      <MilestonesTimeline />
    </>
  );
}




