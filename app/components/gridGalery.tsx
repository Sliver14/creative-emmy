"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

// ------------------------------------
// Types
// ------------------------------------
interface GalleryImage {
  src: string;
  category: "branding" | "graphics" | "logo";
}

// ------------------------------------
// Image Data
// ------------------------------------
const images: GalleryImage[] = [
  { src: "/insight demoresources/67858a93f83a54737c833bb7_img_services1-ezgif.com-avif-to-jpg-converter.jpg", category: "branding" },
  { src: "/insight demoresources/67c8aaf35fa470c9471c85ba_67c49ff00bb6ac91e819f42e_Zight20at20PM-ezgif.com-avif-to-jpg-converter.jpg", category: "graphics" },
  { src: "/insight demoresources/67c8aaf35fa470c9471c8604_67c49910213fd2040fc872e4_Air-Chesky1.jpg", category: "logo" },
  { src: "/insight demoresources/67dc5150b12bfae57e5874eb_67db7e744ac165dadd3cc371_Airbnb-img-6.jpeg", category: "branding" },
  { src: "/insight demoresources/67dc5150b12bfae57e5874ee_67db7e713c696cb713af8d50_Airbnb-img-5.jpeg", category: "graphics" },
  { src: "/insight demoresources/67c8aaf35fa470c9471c8604_67c49910213fd2040fc872e4_Air-Chesky1.jpg", category: "logo" },
  { src: "/insight demoresources/67c8aaf35fa470c9471c8604_67c49910213fd2040fc872e4_Air-Chesky1.jpg", category: "branding" },
  { src: "/insight demoresources/67c8aaf35fa470c9471c8604_67c49910213fd2040fc872e4_Air-Chesky1.jpg", category: "graphics" },
];

// ------------------------------------
// Animation Variants
// ------------------------------------
const imageVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.58, 1] } },
};

type Category = "all" | "branding" | "graphics" | "logo";

export default function GallerySection() {
  const categories: Category[] = ["all", "logo", "graphics", "branding"];
  const [active, setActive] = useState<Category>("all");

  const filteredImages =
    active === "all" ? images : images.filter((img) => img.category === active);

  return (
    <div className="w-full bg-[#f3e4f0] py-12 sm:py-16 md:py-20">
      {/* Title */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-museo text-[#5c0d67]">
          Projects
        </h2>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all
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

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 px-4 sm:px-8 md:px-10">
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
    </div>
  );
}
