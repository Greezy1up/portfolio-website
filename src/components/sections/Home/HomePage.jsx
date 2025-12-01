import { useState } from "react";
import { Hero } from "./0-Hero/Hero";
import { Statistics } from "./1-Statistics/Statistics";
import { Contact } from "./3-Contact/Contact";
import { About } from "./2-About Me/About";
import { Projects } from "./4-Projects/Projects";
import { NavBar } from "../../NavBar";
import { MobileMenu } from "../../MobileMenu";

export const HomePage = ({ menuOpen, setMenuOpen }) => {
  const [showProjects, setShowProjects] = useState(false);

  const openProjects = () => setShowProjects(true);

  return (
    <div className="min-h-screen flex flex-col gap-75 md:gap-32 relative">
      <NavBar menuOpen={menuOpen} setShowProjects={setShowProjects} />
      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setShowProjects={setShowProjects}
      />

      {/* Pass openProjects to Hero */}
      <Hero openProjects={openProjects} />

      <Statistics />
      <About />
      <Contact />

      <Projects show={showProjects} onClose={() => setShowProjects(false)} />
    </div>
  );
};
