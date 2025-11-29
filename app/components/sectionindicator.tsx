// "use client";

// import { useState, useEffect } from "react";

// interface SectionIndicatorProps {
//   sections: string[];
// }

// export default function SectionIndicator({ sections }: SectionIndicatorProps) {
//   const [active, setActive] = useState(0);

//   // Optional: highlight current section on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       const offsets = sections.map(
//         (id) => document.getElementById(id)?.offsetTop || 0
//       );
//       const scrollPos = window.scrollY + window.innerHeight / 2;

//       const currentIndex = offsets.findIndex((offset, i) => {
//         const nextOffset = offsets[i + 1] || Infinity;
//         return scrollPos >= offset && scrollPos < nextOffset;
//       });

//       if (currentIndex !== -1) setActive(currentIndex);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [sections]);

//   const scrollToSection = (index: number) => {
//     const section = document.getElementById(sections[index]);
//     section?.scrollIntoView({ behavior: "smooth" });
//     setActive(index);
//   };

//   return (
//     <div className="fixed top-1/2 right-5 transform -translate-y-1/2 flex flex-col gap-4 z-50">
//       {sections.map((_, i) => (
//         <button
//           key={i}
//           onClick={() => scrollToSection(i)}
//           className={`w-4 h-4 rounded-full border-2 border-[#28082c] transition-all ${
//             active === i ? "bg-[#28082c] scale-125" : "bg-transparent"
//           }`}
//           aria-label={`Go to ${sections[i]}`}
//         />
//       ))}
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";

interface SectionIndicatorProps {
  sections: string[];
  heroSectionId?: string;
  footerSectionId?: string;
}

export default function SectionIndicator({
  sections,
  heroSectionId,
  footerSectionId,
}: SectionIndicatorProps) {
  const [active, setActive] = useState(0);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map(
        (id) => document.getElementById(id)?.offsetTop || 0
      );
      const scrollPos = window.scrollY + window.innerHeight / 2;

      // Determine active section
      const currentIndex = offsets.findIndex((offset, i) => {
        const nextOffset = offsets[i + 1] || Infinity;
        return scrollPos >= offset && scrollPos < nextOffset;
      });

      if (currentIndex !== -1) setActive(currentIndex);

      // Hero/footer color detection
      const hero = heroSectionId ? document.getElementById(heroSectionId) : null;
      const footer = footerSectionId
        ? document.getElementById(footerSectionId)
        : null;

      if (
        (hero && scrollPos >= hero.offsetTop && scrollPos < hero.offsetTop + hero.offsetHeight) ||
        (footer && scrollPos >= footer.offsetTop && scrollPos < footer.offsetTop + footer.offsetHeight)
      ) {
        setIsLight(true);
      } else {
        setIsLight(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, heroSectionId, footerSectionId]);

  const scrollToSection = (index: number) => {
    const section = document.getElementById(sections[index]);
    section?.scrollIntoView({ behavior: "smooth" });
    setActive(index);
  };

  return (
    <div className="hidden md:flex fixed top-1/2 right-5 transform -translate-y-1/2 flex-col gap-4 z-50
      lg:right-8 lg:gap-5
    ">
      {sections.map((_, i) => (
        <button
          key={i}
          onClick={() => scrollToSection(i)}
          className={`
            w-3 h-3 lg:w-4 lg:h-4 rounded-full border-2 transition-all
            ${active === i ? "scale-125" : "scale-100"}
            ${isLight ? "border-white" : "border-[#28082c]"}
            ${active === i ? (isLight ? "bg-white" : "bg-[#28082c]") : "bg-transparent"}
          `}
          aria-label={`Go to ${sections[i]}`}
        />
      ))}
    </div>
  );
}
