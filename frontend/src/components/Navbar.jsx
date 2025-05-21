// src/components/Navbar/Navbar.jsx
const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-black bg-opacity-80 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Prem <span className="text-teal-400">Poudel</span>
        </h1>
        <nav>
          <ul className="flex space-x-6 text-white text-sm md:text-base font-medium">
            <li>
              <a href="#about" className="hover:text-teal-400 transition-colors duration-200">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-teal-400 transition-colors duration-200">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-teal-400 transition-colors duration-200">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
