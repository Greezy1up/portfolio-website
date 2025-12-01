export const MobileMenu = ({ menuOpen, setMenuOpen, setShowProjects }) => {
  // Handle clicking nav items
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false); // close menu
    setShowProjects(false); // ensure Projects overlay closes if open

    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Toggle Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden fixed top-2 right-3 text-4xl z-41 text-white"
      >
        {menuOpen ? "×" : "☰"}
      </button>

      {/* Overlay menu */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-xs text-white flex flex-col justify-center
          transition-all duration-300 ease-in-out z-40"
        >
          <nav className="flex flex-col items-center gap-18 header font-medium text-4xl text-white">
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")}>
              Home
            </a>
            <a href="#about" onClick={(e) => handleNavClick(e, "#about")}>
              About
            </a>
            <button
              onClick={() => {
                setMenuOpen(false);
                setShowProjects(true);
              }}
              className="text-white"
            >
              Projects
            </button>
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
              Contact
            </a>
          </nav>
        </div>
      )}
    </>
  );
};
