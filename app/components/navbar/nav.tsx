"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/S_logo_new.svg"
            alt="Logo"
            className="w-28 cursor-pointer"
            width={120}
            height={120}
          />
        </Link>

        {/* Title */}
        <div className="text-lg font-bold">My Portfolio</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link href="#about" className="hover:text-gray-400">About</Link></li>
          <li><Link href="#experiences" className="hover:text-gray-400">Experiences</Link></li>
          <li><Link href="#work" className="hover:text-gray-400">Work</Link></li>
          <li><Link href="#contact" className="hover:text-gray-400">Contact</Link></li>
          <li>
            <Link href="/My Resume 2.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              Resume
            </Link>
          </li>
        </ul>

        {/* Hamburger Button (mobile only) */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col items-center gap-4">
          <li><Link href="#about">About</Link></li>
          <li><Link href="#experiences">Experiences</Link></li>
          <li><Link href="#work">Work</Link></li>
          <li><Link href="#contact">Contact</Link></li>
          <li>
            <Link href="/My Resume 2.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;