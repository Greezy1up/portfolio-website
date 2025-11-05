import { useEffect } from "react";

export const NavBar = ({ menuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40">
      <div className="flex justify-center items-center h-16 space-x-8 bg-gradient-to-b from-black to-transparent">
        <div className="flex justify-between items-center h-16 w-full max-w-screen-xl px-4">
          <a
            href="#home"
            className="header font-bold text-4xl text-red-800"
          >
            Greezy
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#store" className="header font-medium text-2xl text-red-800 hover:text-white transition-colors">
              Store
            </a>
            <a href="#about" className="header font-medium text-2xl text-white hover:text-red-400 transition-colors">
              About
            </a>
            <a href="#projects" className="header font-medium text-2xl text-white hover:text-red-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="header font-medium text-2xl text-white hover:text-red-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
