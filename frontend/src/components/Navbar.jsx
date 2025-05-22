import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-black bg-opacity-80 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Prem <span className="text-teal-400">Poudel</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-white text-sm md:text-base font-medium">
            <li><a href="#about" className="hover:text-teal-400 transition">About</a></li>
            {/* <li><a href="#projects" className="hover:text-teal-400 transition">Projects</a></li> */}
            <li><a href="#contact" className="hover:text-teal-400 transition">Contact</a></li>
            
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-xl font-bold focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "X" : "M"}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-black bg-opacity-90 backdrop-blur-md px-6 pb-6 pt-2">
          <ul className="flex flex-col space-y-4 text-white text-base font-medium">
            <li><a href="#about" onClick={() => setIsOpen(false)} className="hover:text-teal-400 transition">About</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-teal-400 transition">Projects</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-teal-400 transition">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
