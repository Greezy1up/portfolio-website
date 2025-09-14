// AnimatedDiv.jsx

import React, { useEffect } from "react";
import sal from "sal.js";
import "sal.js/dist/sal.css";

const AnimatedDiv = ({ children, className = "", delay = 0, ...rest }) => {
  useEffect(() => {
    sal(); // initialize Sal.js when the component mounts
  }, []);

  return (
    <div
      data-sal="fade"                  // equivalent of "animate in"
      data-sal-duration="600"           // duration in ms
      data-sal-delay={delay}            // delay in ms
      data-sal-easing="ease-out"        // easing
      className={className}
      {...rest}
    >
      {children}
    </div>
  );
};

export default AnimatedDiv;
