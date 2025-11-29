// // components/Reveal.tsx
// import { motion } from "framer-motion";

// export default function Reveal({ children }: { children: React.ReactNode }) {
//   return (
//     // <motion.div
//     //   initial={{ opacity: 0, scale: 0.95 }}
//     //   whileInView={{ opacity: 1, scale: 1 }}
//     //   transition={{ duration: 1.5, ease: "easeOut" }}
//     //   viewport={{ once: true, margin: "-100px" }} 
//     // >
//     //   {children}
//     // </motion.div>
//     <motion.div
//     initial={{ opacity: 0, x: -50 }}
//     whileInView={{ opacity: 1, x: 0 }}
//     transition={{ duration: 1, ease: "easeOut" }}
//     viewport={{ once: true }}
//     >
//     {children}
//     </motion.div>

//   );
// }

// components/Reveal.tsx
import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  duration?: number; // optional, default 0.7s
  distance?: number; // how much it comes from bottom, default 20px
}

export default function Reveal({
  children,
  duration = 0.7,
  distance = 10,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, ease: "easeIn" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
