export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      {/* Toggle Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden fixed top-2 right-3 text-4xl z-41 text-white"
      >
        {menuOpen ? "×" : "☰"}
      </button>

      {/* Conditionally render overlay only if menuOpen is true */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-xs text-white flex flex-col justify-center
          transition-all duration-300 ease-in-out z-40"
        >
          <nav className="flex flex-col items-center gap-18 header font-medium text-4xl text-white">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </>
  );
};
