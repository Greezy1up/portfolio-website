//Button.jsx

import { motion } from "framer-motion";
import AnimatedDiv from "../../AnimatedDiv";

let delayCounter = 0;

const Button = ({ title, img, href }) => {
  delayCounter += 0.1;

  return (
    <AnimatedDiv delay={0.1}>

      <a href={href} target="_blank" rel="noopener noreferrer">


      {/* Button */}
        <div className="
          w-40 h-12
          rounded-2xl 
          bg-red-800
          border border-red-400
          flex items-center justify-center 
          transition duration-200 ease-in-out transform hover:scale-105
        ">
          <div className="
          flex flex-row 
          items-center 
          gap-2">
            <img src={img} className="h-5" />
            <h1 className="
            sub-head 
            font-bold 
            md:text-lg text-base
            ">{title}</h1>
          </div>
        </div>

      </a>
    </AnimatedDiv>
  );
};

export default Button;
