import Lottie from 'lottie-react';
import LogoAnimation from '/src/assets/Logo.json';
import AnimatedDiv from "../AnimatedDiv";
import { motion } from 'framer-motion';

export const Hero = () => {
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
      <AnimatedDiv
        initial={{ opacity: 0, y: 175 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
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

      </AnimatedDiv>

      {/* Text & Buttons Container */}
      <div className="
      flex flex-col
      gap-8 md:gap-15
      ">

        {/* Heading text */}
        <AnimatedDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} 
        >
            <h1 className="
            header font-medium
            text-[36px] md:text-[75px]
            ">
              Greezy
            </h1>

            <h2 className="
            sub-head font-medium
            gray 
            text-[20px] md:text-[30px]
            ">
              video editor, designer, developer.
            </h2>

        </AnimatedDiv>

        {/* Buttons container */}
        <AnimatedDiv initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div className="
          flex flex-col md:flex-row
          items-center
          gap-6 md:gap-8">
            
            {/* Projects Button */}
            <div className="
            w-full md:w-[175px] h-[52px]
            rounded-[14px]

            transition duration-200 ease-in-out
            transform hover:scale-105 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(239,68,68,0.3)]
            ">
              
                <button className="
                w-full h-full
                rounded-[12px]
                bg-gradient-to-r from-red-900 to-rose-600
                border border-rose-600
                header font-bold
                text-[20px] md:text-[24px] 
                cursor-pointer
                ">
                  Projects
                </button>
              </div>

            {/* Contact Button */}
            <a href="#contact" className="w-full md:w-[175px] h-[52px]">
            <div className="
            w-full md:w-[175px] h-[52px]
            rounded-[14px]

            transition duration-200 ease-in-out
            transform hover:scale-105 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(239,68,68,0.3)]
            ">
                <button className="
                w-full h-full
                rounded-[12px]
                border-2 border-red-400
                header font-bold
                text-[20px] md:text-[24px] text-red-400
                cursor-pointer
                ">
                  Contact
                </button>
              </div>
            </a>
            
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
};
