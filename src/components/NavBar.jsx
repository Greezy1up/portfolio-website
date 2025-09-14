import { useEffect } from "react";

const navStyle = {};

export const NavBar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40">
            <div className="flex justify-center items-center h-16 space-x-8 bg-gradient-to-b from-black/100 to-transparent backdrop-blur-md">
                {/* Outer container for centering and spacing */}
                <div className="flex justify-between items-center h-16 w-full max-w-screen-xl px-4">
                    {/* Inner container with content */}
                    <a href="#home" className="header font-bold text-4xl text-red-800 ">
                        Greezy
                    </a>

                    <div
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden bg-yellow-500"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        {/* Mobile menu toggle */}
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {/* Desktop menu */}
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
