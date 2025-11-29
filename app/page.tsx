"use client";

import Image from 'next/image';
import Reveal from './components/reveal';
import { motion } from 'framer-motion';
import GridGallery from './components/gridGalery';
import HeaderNav from './components/headernav';
import SectionIndicator from './components/sectionindicator';

export default function Home() {
  const YOUR_NUMBER = "2348107419089"; // Replace with your actual number
  return (
    <div 
      className="flex flex-col font-erbar min-h-screen w-screen bg-fixed bg-[#5c0d67] bg-cover bg-position-[center_top]"
      style={{
        backgroundImage: `url('/download(6).png')`
      }}
    >
      
    <div className="absolute h-[225vh] w-screen inset-0 bg-black/20"></div> 
    <SectionIndicator sections={["hero", "about", "projects", "contact"]} />


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
        <div className="flex relative font-extralight justify-center items-center h-screen w-full">
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
            animate={{ y: [0, 10, 0] }}          // animate up & down
            transition={{
              duration: 1.5,                     // total animation time
              repeat: Infinity,                  // loop forever
              repeatType: "loop",                // smooth loop
              ease: "easeInOut"                  // natural movement
            }}
          >
            <path d="m6 9 6 6 6-6" />
          </motion.svg>
        </div>
      </Reveal>

      <div className='flex w-screen h-full flex-col bg-[#f3e4f0] gap-[100px]'>
        
        {/* About Section */}
        <div id="about" className="flex w-full h-screen bg-[#f3e4f0] text-[#28082c] justify-center items-center">
          <div className="w-[90%] max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Left Image */}
            <Reveal>
              <div className="w-full h-full shrink-0">
                <Image
                  src="/insight demoresources/67ddf0c6b9bcdeb600fda65d_PANEL8-right-side-image-image.jpg"
                  alt="Creative Emmy Team"
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover rounded-xl shadow-lg"
                />
              </div>
            </Reveal>

            {/* Right Text */}
            <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6">
              <Reveal>
                <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-[#5c0d67] font-bold font-museo">
                  About Creative Emmy
                </h2>
              </Reveal>

              <Reveal>
                <h3 className="text-md sm:text-2xl font-museo md:text-xl font-semibold ">
                  Design | Branding | Innovation
                </h3>
              </Reveal>

              <Reveal>
                <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed md:leading-loose">
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



      {/* Project */}
      <div id="projects">
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
                  className="bg-[#f3e4f0] text-[#5c0d67] px-6 py-3 md:px-8 md:py-4 cursor-pointer rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
                >
                  Contact Us
                </a>
              </Reveal>

            </div>
          </div>


          {/* Footer */}
          <div>
            <div className='flex justify-center items-center h-20 w-full bg-[#28082c] text-[#f3e4f0]'>
              <p className='text-base font-light'>&copy; 2025 Creative Emmy. All rights reserved.</p>
            </div>
          </div>
        </div>
    </div>
    </div>
      
     
    </div>
  );
}
