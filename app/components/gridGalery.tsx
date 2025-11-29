"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

// ------------------------------------
// Types
// ------------------------------------
interface GalleryImage {
  src: string;
  category: "branding" | "graphics" | "logo" | "UI/UX";
}

// ------------------------------------
// Image Data
// ------------------------------------
const images: GalleryImage[] = [
  { src: "/emmy_work/IMG-20251129-WA0004.jpg", category: "branding" },
  { src: "/emmy_work/IMG-20251129-WA0005.jpg", category: "graphics" },
  { src: "/emmy_work/IMG-20251129-WA0006.jpg", category: "logo" },
  { src: "/emmy_work/IMG-20251129-WA0007.jpg", category: "branding" },
  { src: "/emmy_work/IMG-20251129-WA0008.jpg", category: "graphics" },
  { src: "/emmy_work/IMG-20251129-WA0009.jpg", category: "logo" },
  { src: "/emmy_work/IMG-20251129-WA0010.jpg", category: "branding" },
];

// ------------------------------------
// Animation Variants
// ------------------------------------
const imageVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.58, 1] } },
};

type Category = "all" | "branding" | "graphics" | "logo" | "UI/UX";

export default function GallerySection() {
  const categories: Category[] = ["all", "logo", "graphics", "branding", "UI/UX"];
  const [active, setActive] = useState<Category>("all");

  const filteredImages =
    active === "all" ? images : images.filter((img) => img.category === active);
  const router = useRouter();

  return (
    <div className="flex w-full h-full flex-col gap-20 bg-[#f3e4f0] py-12 sm:py-16 md:py-20">
      
      <div className="flex flex-col gap-10">
        {/* Title */}
      <div className="text-center">
        <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-museo text-[#5c0d67]">
          Featured Projects
        </h2>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-lg sm:text-xl font-medium transition-all
              ${
                active === cat
                  ? "bg-[#5c0d67] text-[#f3e4f0]"
                  : "bg-[#e3cdda] text-[#5c0d67] hover:bg-[#d9c1cf]"
              }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      </div>
      


      {/* Masonry Grid */}
      <div className="columns-2 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 px-4 sm:px-8 md:px-10">
        {filteredImages.map((item, index) => (
          <motion.div
            key={index}
            className="mb-4 sm:mb-6 break-inside-avoid"
            variants={imageVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.05 }}
          >
            <Image
              src={item.src}
              alt={`Project ${index + 1}`}
              width={800}
              height={1200}
              className="w-full rounded-lg object-cover"
            />
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-center ">
        <button 
          onClick={() => router.push("/projects")} 
          className="bg-[#5c0d67] w-auto text-[#f3e4f0] px-6 py-3 md:px-8 md:py-4 text-lg sm:text-xl cursor-pointer rounded-full font-semibold hover:bg-[#5c0d67]/90 transition-all duration-300">
          View all Projects
        </button>
      </div>
      
    </div>
  );
}
