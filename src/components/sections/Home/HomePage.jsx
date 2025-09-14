import { Hero } from "./Hero";
import { Statistics } from "./1-Statistics/Statistics";

import { Contact } from "./3-Contact/Contact";
import { About } from "./2-About Me/About";

export const HomePage = () => {
  return (

    <div className="min-h-screen flex flex-col gap-75 md:gap-32">
      <Hero />
      <Statistics />
      <About />
      <Contact />
    </div>
    
  );
};
