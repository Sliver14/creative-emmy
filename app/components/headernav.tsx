"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true); // control navbar visibility
  const lastScroll = useRef(0);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const links = ["home", "about", "projects", "contact"];

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll.current && currentScroll > 100) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close mobile menu
    }
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: showNav ? 0 : -100, opacity: showNav ? 1 : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 font-erbar flex items-center justify-between w-full h-24 px-6 sm:px-16 lg:px-[200px] bg-[#28082c] z-50 shadow-lg"
    >
      {/* Logo */}
      <Link href="/">
        <Image
          src="/creative_emmy.png"
          alt="Logo"
          width={80}
          height={50}
          className="cursor-pointer"
        />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-10">
        {links.map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="relative text-[#f3e4f0] text-lg font-medium transition-colors duration-300 hover:text-[#ff8740] 
                       after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#ff8740] 
                       after:transition-all after:duration-300 hover:after:w-full"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </nav>

      {/* Mobile Hamburger */}
      <button
        ref={buttonRef}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((s) => !s)}
        className="md:hidden relative w-10 h-10 flex items-center justify-center"
      >
        <div className="relative w-7 h-7 flex items-center justify-center">
          <motion.span
            className="absolute h-[3px] w-7 rounded-full bg-[#f3e4f0]"
            style={{ transformOrigin: "center" }}
            animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="absolute h-[3px] w-7 rounded-full bg-[#f3e4f0]"
            style={{ transformOrigin: "center" }}
            animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
      </button>

      {/* Mobile Menu */}
      <motion.div
        ref={menuRef}
        initial={false}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="absolute top-24 left-0 w-full bg-[#28082c] md:hidden overflow-hidden"
      >
        <div className="flex flex-col items-center py-6 space-y-6">
          {links.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="relative text-[#f3e4f0] text-xl font-medium transition-colors duration-300 hover:text-[#ff8740] 
                         after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#ff8740] 
                         after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
