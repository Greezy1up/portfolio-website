import { useEffect } from "react";

export const NavBar = ({ setShowProjects }) => {



  // Handle clicks to close Projects and scroll to section
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setShowProjects(false); // Close the Projects overlay
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed w-full z-40 bg-gradient-to-b from-black">
     <div className="flex justify-between items-center h-16 max-w-screen-xl mx-auto w-full px-4">

          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="header font-bold text-4xl text-red-800"
          >
            Greezy
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#store"
              onClick={(e) => handleNavClick(e, "#store")}
              className="header font-medium text-2xl text-red-800 hover:text-white transition-colors"
            >
              Store
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="header font-medium text-2xl text-white hover:text-red-400 transition-colors"
            >
              About
            </a>

            <button
              onClick={() => setShowProjects(true)}
              className="header font-medium text-2xl text-white hover:text-red-400 transition-colors hover:cursor-pointer"
            >
              Projects
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="header font-medium text-2xl text-white hover:text-red-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
   
    </nav>
  );
};
