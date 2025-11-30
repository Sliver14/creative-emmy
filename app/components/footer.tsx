// import React from 'react';
// import { FaInstagram, FaTwitter, FaLinkedin, FaDribbble } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-[#28082c] text-[#f3e4f0] w-full py-10">
//       <div className="flex flex-col items-center justify-center space-y-6">
        
//         {/* Brand/Logo (Optional - remove if not needed) */}
//         {/* <h3 className="text-2xl font-bold tracking-wider">CREATIVE EMMY</h3> */}

//         {/* Social Icons with border circle effect */}
//         <div className="flex space-x-4">
//           {[<FaInstagram />, <FaTwitter />, <FaLinkedin />, <FaDribbble />].map((icon, index) => (
//             <a 
//               key={index} 
//               href="#" 
//               className="p-3 border border-[#f3e4f0]/30 rounded-full hover:bg-[#f3e4f0] hover:text-[#28082c] transition-all duration-300"
//             >
//               {icon}
//             </a>
//           ))}
//         </div>

//         {/* Divider Line */}
//         <div className="w-24 h-[1px] bg-[#f3e4f0] opacity-30"></div>

//         {/* Copyright */}
//         <p className="text-xs font-light tracking-wide opacity-75">
//           &copy; 2025 Creative Emmy. All rights reserved.
//         </p>

//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const socials = [
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/momoh3840?igsh=d2VhOGtwOTFqaDhq", // update with real handle
    },
    {
      icon: <FaTwitter />,
      link: "https://x.com/praiseemmy5?t=yD5v57xMAMcYVBQl5UeBLA&s=09", // update
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/emmy-praise-66116b321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", // update
    },
    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com/emmanuel.momoh.718", // update
    },
  ];

  return (
    <footer className="bg-[#28082c] text-[#f3e4f0] w-full py-10">
      <div className="flex flex-col items-center justify-center space-y-6">

        {/* Social Icons */}
        <div className="flex space-x-4">
          {socials.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-[#f3e4f0]/30 rounded-full 
                         hover:bg-[#f3e4f0] hover:text-[#28082c] 
                         transition-all duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-24 h-[1px] bg-[#f3e4f0] opacity-30"></div>

        {/* Copyright */}
        <p className="text-xs font-light tracking-wide opacity-75">
          &copy; 2025 Creative Emmy. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
