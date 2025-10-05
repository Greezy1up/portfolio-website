import { useEffect } from "react";
import Lottie from "lottie-react";
import LogoAnimation from "/src/assets/Logo.json";
import sal from "sal.js";
import "sal.js/dist/sal.css";
import { Button } from "./Button";

export const Hero = () => {
  useEffect(() => {
    sal();
  }, []);

  return (
    <section
      id="home"
      className="
        min-h-screen
        flex flex-col md:flex-row 
        items-center justify-center
        gap-12
        text-center md:text-left
      "
    >
      {/* Logo */}
      <div
        data-sal="zoom-in"
        data-sal-duration="800"
        data-sal-easing="ease-out-bounce"
      >
        <Lottie
          className="
            w-xs md:w-lg
            transition-transform duration-300 ease-in-out 
            hover:scale-[1.1]
          "
          animationData={LogoAnimation}
          loop
          autoplay
        />
      </div>

      {/* Text & Buttons Container */}
      <div className="flex flex-col gap-8 md:gap-15">
        {/* Heading text */}
        <div
          data-sal="slide-up"
          data-sal-duration="600"
          data-sal-delay="100"
          data-sal-easing="ease-out-bounce"
          className="flex flex-col gap-2"
        >
          <h1 className="header font-medium text-4xl md:text-7xl">
            Greezy
          </h1>
          <h2 className="sub-head gray text-xl md:text-3xl">
            video editor, designer, developer.
          </h2>
        </div>

        {/* Buttons container */}
          <div 

          data-sal="slide-up"
          data-sal-duration="600"
          data-sal-delay="300"
          data-sal-easing="ease-out"
          
          className="flex flex-col md:flex-row items-center gap-6 md:gap-8">

           <Button href="#projects" title="Projects" variant="filled" />
           <Button href="#contact" title="Contact" variant="outline" />
        </div>
      </div>
    </section>
  );
};
