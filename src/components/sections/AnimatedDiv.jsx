// AnimatedDiv.jsx

import { motion } from "framer-motion";

const AnimatedDiv = ({ children, className = "", delay = 0, ...rest }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
