"use client";

import Image from 'next/image';
import Reveal from './components/reveal';
import { motion } from 'framer-motion';
import GridGallery from './components/gridGalery';
import HeaderNav from './components/headernav';
import SectionIndicator from './components/sectionindicator';
import Footer from './components/footer';

// Import Icons for the tools section
import { 
  SiAdobephotoshop, 
  SiCoreldraw, 
  SiFigma, 
  SiAdobexd, 
  SiAdobepremierepro, 
  SiAdobeillustrator 
} from 'react-icons/si';

export default function Home() {
  const YOUR_NUMBER = "2348107419089"; 

  // Tool Data Configuration
  const tools = [
    { name: "Photoshop", icon: <SiAdobephotoshop />, description: "Photo Manipulation" },
    { name: "Illustrator", icon: <SiAdobeillustrator />, description: "Vector Graphics" },
    { name: "CorelDraw", icon: <SiCoreldraw />, description: "Print Design" },
    { name: "Figma", icon: <SiFigma />, description: "UI/UX Design" },
    { name: "Adobe UX", icon: <SiAdobexd />, description: "Prototyping" },
    { name: "Premiere Pro", icon: <SiAdobepremierepro />, description: "Video Editing" },
  ];

  return (
    <div 
      className="flex flex-col font-erbar min-h-screen w-full overflow-x-hidden bg-fixed bg-[#5c0d67] bg-cover bg-position-[center_top]"
      style={{
        backgroundImage: `url('/download(6).png')`
      }}
    >
      
    <div className="absolute h-screen md:h-[225vh] w-full inset-0 bg-black/20"></div> 
    <SectionIndicator sections={["hero", "about", "tools", "projects", "contact"]} />

    <div className='flex flex-col relative z-20'>
      {/* Header/Navigation */}
      <HeaderNav/>

      {/* Hero */}
      <div id="hero" className="flex flex-col justify-end items-center h-screen w-full relative text-[#f3e4f0] pb-24 md:pb-20 px-4  md:px-20">
        <Reveal>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold font-museo mb-4 md:mb-6 text-center">
            Creative Emmy
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-lg font-erbar sm:text-xl md:text-2xl text-center">
            Design | Print | Brand
          </p>
        </Reveal>
      </div>

      <Reveal>
          <div className="flex relative font-extralight justify-center items-center h-0 md:h-screen w-full">
           <a href="#about" className="hidden md:block scroll-smooth">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down"
              animate={{ y: [0, 10, 0] }}          
              transition={{
                duration: 1.5,                   
                repeat: Infinity,                  
                repeatType: "loop",                
                ease: "easeInOut"                  
              }}
            >
              <path d="m6 9 6 6 6-6" />
            </motion.svg>
          </a>
          </div>
      </Reveal>

      <div className='flex w-full h-full flex-col bg-[#f3e4f0] gap-0'>
        
        {/* About Section */}
        <div id="about" className="flex w-full h-full pt-20 pb-10 md:py-20 bg-[#f3e4f0] text-[#5c0d67] justify-center items-center">
          <div className="w-[90%] max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Left Image */}
            <Reveal>
              <div className="w-full h-full shrink-0">
                <Image
                  src="/WhatsApp Image 2025-11-29 at 14.05.00_6958caa0.jpg"
                  alt="Creative Emmy Team"
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover rounded-xl shadow-lg"
                />
              </div>
            </Reveal>

            {/* Right Text */}
            <div className="w-full md:w-full items-center md:items-start flex flex-col gap-4 md:gap-6">
              <Reveal>
                <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-[#5c0d67] font-bold font-museo">
                  Creative Emmy
                </h2>
              </Reveal>

              <Reveal>
                <h3 className="text-md sm:text-2xl font-museo md:text-xl font-semibold ">
                  Design | Branding | Innovation
                </h3>
              </Reveal>

              <Reveal>
                <p className="text-xl text-center md:text-start sm:text-xl md:text-2xl leading-6 md:leading-8">
                  Creative Emmy is a leading design studio specializing in delivering high-quality
                  branding, print, and digital solutions. Our mission is to bring your vision to life
                  with creativity, precision, and innovation. From logos and marketing materials to
                  full-scale campaigns, we help businesses communicate their story and stand out
                  in a crowded market.
                </p>
              </Reveal>
            </div>
          </div>  
        </div>

        {/* --- NEW TOOLS SECTION --- */}
        <div id="tools" className="w-full py-10 md:py-20 bg-[#f3e4f0] text-[#5c0d67]">
          <div className="w-[90%] max-w-6xl mx-auto">
            <div className="flex flex-col items-center mb-12 text-center">
              <Reveal>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-museo mb-4">
                  Creative Arsenal
                </h2>
              </Reveal>
              <Reveal>
                <p className="text-lg md:text-xl max-w-2xl">
                  We utilize industry-standard tools to craft pixel-perfect designs and seamless user experiences.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {tools.map((tool, index) => (
                <Reveal key={index}>
                  <div className="group bg-white/50 border border-[#5c0d67]/10 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-[#5c0d67] hover:text-[#f3e4f0] transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl cursor-default">
                    <div className="text-5xl md:text-6xl text-[#5c0d67] group-hover:text-[#f3e4f0] transition-colors duration-300">
                      {tool.icon}
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl md:text-2xl font-bold font-museo">{tool.name}</h3>
                      <p className="text-sm md:text-base opacity-70 group-hover:opacity-100">{tool.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
        {/* --- END TOOLS SECTION --- */}

        {/* Project */}
        <div id="projects" className="pt-10">
           {/* Added padding top to separate from tools slightly */}
          <GridGallery/>
        </div>

        <div className='flex flex-col'>
          {/* Contact Us */}
          <div id='contact' className="w-full bg-[#5c0d67] py-20">
            <div className="flex flex-col justify-center items-center text-center text-[#f3e4f0] max-w-4xl mx-auto px-6 md:px-20">
              
              <Reveal>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-museo mb-4 md:mb-6">
                  Get in Touch
                </h2>
              </Reveal>

              <Reveal>
                <p className="text-lg sm:text-xl md:text-2xl mb-6">
                  Have a project in mind? We&apos;d love to hear from you!
                </p>
              </Reveal>

              <Reveal>
                <a
                  href={`https://wa.me/${YOUR_NUMBER}?text=Hello%20Creative%20Emmy!%20I%20have%20a%20project%20in%20mind.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f3e4f0] text-[#5c0d67] px-6 py-3 md:px-8 md:py-4 text-lg sm:text-xl cursor-pointer rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
                >
                  Contact Us
                </a>
              </Reveal>

            </div>
          </div>

          {/* Footer */}
          <Footer/>
        </div>
      </div>
    </div>
    
    </div>
  );
}